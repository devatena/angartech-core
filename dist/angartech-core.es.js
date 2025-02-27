import { defineComponent as c, computed as a, createElementBlock as p, openBlock as u } from "vue";
const l = c({
  name: "MeuBotao",
  props: {
    primary: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(t) {
    return { computedClass: a(
      () => t.primary ? "btn-primary" : "btn-secondary"
    ) };
  }
}), m = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of o)
    e[n] = s;
  return e;
};
function d(t, o, e, n, s, _) {
  return u(), p("button", null, " opids fs");
}
const f = /* @__PURE__ */ m(l, [["render", d]]), r = { MeuBotao: f }, i = (t) => {
  Object.keys(r).forEach((o) => {
    t.component(o, r[o]);
  });
}, B = { install: i };
export {
  f as MeuBotao,
  B as default
};
