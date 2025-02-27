import type { App } from "vue";
import MeuBotao from "./components/MeuBotao.vue";

const components = { MeuBotao };

const install = (app: App): void => {
  Object.keys(components).forEach((key) => {
    app.component(key, components[key as keyof typeof components]);
  });
};

export default { install };
export { MeuBotao };
