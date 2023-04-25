// Used in flow decision points
const Constants = {
  DELETE: "delete a progress",
  FORWARD: "move forward a step in the flow",
  BACK: "go back one step in the flow",
};

// Helpers
const Utils = {
  sleep: async (durationMilliseconds) => {
    return new Promise((resolve) => {
      return setTimeout(resolve, durationMilliseconds);
    });
  },
};

// Side-effects
const Actions = {
  async loadUserProgress() {
    await Utils.sleep(2000);
    return window.localStorage.getItem("userProgress");
  },

  async saveUserProgress() {
    await Utils.sleep(2000);
    return window.localStorage.setItem(
      "userProgress",
      JSON.stringify({ some: "data" })
    );
  },

  async deleteUserProgress() {
    await Utils.sleep(2000);
    window.localStorage.removeItem("userProgress");
    return Promise.resolve();
  },
};

// All the ways the app can be in,
// named and organized freely, using Promises
const Flows = {
  master: async () => {
    const [, progress] = await Promise.all([
      Views.loading(),
      Actions.loadUserProgress(),
    ]);
    return progress ? Flows.continuation() : Flows.firstTime();
  },

  continuation: async () => {
    const { key } = await Views.main();

    // A map of possible sub-flows,
    // Depending on which button in main is clicked,
    // a different key means a different sequence
    return {
      async [Constants.FORWARD]() {
        await Views.afterMain();
        return Flows.continuation();
      },

      async [Constants.DELETE]() {
        await Promise.all([Views.deleting(), Actions.deleteUserProgress()]);
        return Flows.master();
      },
    }[key]();
  },

  firstTime: async () => {
    await Views.intro1();
    await Views.intro2();
    await Views.intro3();
    await Views.intro4();

    await Promise.all([Views.saving(), Actions.saveUserProgress()]);

    return Flows.continuation();
  },
};

// Things to render on the screen
const Views = {
  init(el) {
    this.el = el;
  },

  // One of the 2 "componentized" Views
  async messageWithButtons({ content, btn }) {
    const getBtn = (maybeMultipleBtns) => {
      if (Array.isArray(maybeMultipleBtns)) {
        return maybeMultipleBtns;
      }
      return [btn];
    };

    const template = () => {
      return `
          <form id="complete-step-form" class="view message-view">
            ${content}
            <footer>
              ${getBtn(btn)
                .map(
                  (eachBtn) => `
                <button
                  autofocus
                  class="btn ${eachBtn.type || ""}"
                  data-key="${eachBtn.key || Constants.FORWARD}"
                >
                  ${eachBtn.text}
                </button>
              `
                )
                .join("")}
            </footer>
          </form>
        `;
    };

    const transitionDuration = 500;

    const cssVariables = () => `;
        --transition-duration: ${transitionDuration};
      `;

    const listenToFormSubmit = (onSubmit) => {
      const form = this.el.querySelector("#complete-step-form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.classList.add("exiting");
        setTimeout(() => {
          onSubmit({
            key: e.submitter.dataset.key,
          });
        }, transitionDuration);
      });
    };

    this.el.innerHTML = template();
    this.el.style.cssText += cssVariables();

    return new Promise(listenToFormSubmit);
  },

  // Another "component" View
  async statusFeedback({ text, type }) {
    const template = () => {
      const typeClassName = type || "";
      return `
          <div class="view status-feedback-view">
            <span class="animation-object ${type}"></span>
            <span class="status-text ${type}">${text}</span>
          </div>
        `;
    };

    const animationDuration = 1500;

    const cssVariables = () => `;
        --animation-duration: ${animationDuration}ms;
        --type: ${type};
      `;

    this.el.innerHTML = template();
    this.el.style.cssText += cssVariables();

    const listenToAnimationEnd = (onEnd) => {
      setTimeout(onEnd, animationDuration);
    };

    await new Promise(listenToAnimationEnd);
  },

  // A higher-order View, that uses a component
  async loading() {
    return Views.statusFeedback({
      text: "loading",
      type: "loading",
    });
  },

  async saving() {
    return Views.statusFeedback({
      text: "saving",
      type: "saving",
    });
  },

  async deleting() {
    return Views.statusFeedback({
      text: "deleting",
      type: "deleting",
    });
  },

  // Another higher-order View, that uses a different component
  async intro1() {
    return Views.messageWithButtons({
      content: `
          <h1>Hello,</h1>
          <p>You seem to be here for the first time.</p>
        `,
      btn: {
        text: "Let's start!",
      },
    });
  },

  async intro2() {
    return Views.messageWithButtons({
      content: `
          <h1>Promises</h1>
          <p>In this demo, I'm using promises for chaining and transitioning between views.</p>
        `,
      btn: {
        text: "What else?",
      },
    });
  },

  async intro3() {
    return Views.messageWithButtons({
      content: `
          <h1>await View()</h1>
          <p>Views are <em>awaited</em> to unblock their future flow.</p>
          <p>UI transitions are ensured between every screen.</p>
        `,
      btn: {
        text: "Such dimension",
      },
    });
  },

  async intro4() {
    return Views.messageWithButtons({
      content: `
          <h1>Let's get interactive</h1>
          <p>After this view, your progress will be saved.</p>
          <p>You'll switch to a <em>continuation flow</em>, from this <em>intro</em>.</p>
        `,
      btn: {
        text: "Save it",
      },
    });
  },

  async main() {
    return Views.messageWithButtons({
      content: `
          <h1>Continuity</h1>
          <p>Now, you have a <em>progress</em>. If you refresh the browser, I'll remember the progress.</p>
          <p>Alternatively:</p>
        `,
      btn: [
        {
          text: "Delete progress",
          type: "danger",
          key: Constants.DELETE,
        },
        {
          text: "Something",
          type: "neutral",
          key: Constants.FORWARD,
        },
      ],
    });
  },

  async afterMain() {
    return Views.messageWithButtons({
      content: `
          <img src="https://assets.codepen.io/25387/kuu.jpeg" alt="a photo" />
        `,
      btn: {
        text: "Go back",
        type: "different",
      },
    });
  },
};

// Views should recognize the container
Views.init(document.getElementById("app"));

// Init one of the flows
Flows.master();
