import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6 } from "./Menu-BOmtUVKS.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$7 } from "./Footer1-D6LXaAWj.js";
import { u as useHead } from "./index-C2merokO.js";
import "./nuxt-link-C4gLkNyK.js";
import "ufo";
import "hookable";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
const _imports_0 = publicAssetsURL("/assets/imgs/svg-assets/hi.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "contact-header section-padding" }, _attrs))}><div class="container mt-100"><div class="row justify-content-center"><div class="col-12"><div class="cont text-center mb-80"><h6 class="sub-title mb-15"><span class="icon-img-30 mr-10"><img${ssrRenderAttr("src", _imports_0)} alt=""></span> Hello, Let&#39;s get in touch</h6><h1>Get In Touch.</h1></div></div><div class="col-lg-11"><div class="google-map"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=hollwood&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe></div></div></div></div></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "info-contact section-padding sub-bg pt-0" }, _attrs))}><div class="container"><div class="sec-head text-center mb-80"><span class="sub-title mb-15 opacity-8">- Contact Info</span><h3 class="text-u fz-50">Contact With Us!</h3></div><div class="row justify-content-center"><div class="col-lg-4 col-md-6"><div class="item text-center sm-mb50 md-mb50"><span class="sub-title opacity-8 mb-5">Email :</span><h6>hello@spaceedigital.com</h6></div></div><div class="col-lg-4 col-md-6"><div class="item text-center sm-mb50"><span class="sub-title opacity-8 mb-5">office :</span><h6>Old Road Monrovia, Liberia </h6></div></div><div class="col-lg-4 col-md-6"><div class="item text-center"><span class="sub-title opacity-8 mb-5">Phone :</span><h6>+231 881 791 949</h6></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact/Info.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact section-padding" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8"><div class="full-width"><div class="sec-head text-center mb-80"><span class="sub-title mb-15 opacity-8">- Contact Us</span><h3 class="text-u fz-50">Get In Touch.</h3></div><form id="contact-form" method="post" action="contact.php"><div class="messages"></div><div class="controls row"><div class="col-lg-6"><div class="form-group mb-30"><input id="form_name" type="text" name="name" placeholder="Name" required="required"></div></div><div class="col-lg-6"><div class="form-group mb-30"><input id="form_email" type="email" name="email" placeholder="Email" required="required"></div></div><div class="col-12"><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea></div><div class="text-center"><div class="mt-30 hover-this cursor-pointer"><button type="submit" class="hover-anim"><span class="text">Let&#39;s Talk</span></button></div></div></div></div></form></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact/Form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Contact`,
      bodyAttrs: {
        class: "main-bg"
      },
      script: [
        { src: "/assets/js/smoother-script.js", defer: true }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoader = _sfc_main$4;
      const _component_CommonNavbar = _sfc_main$5;
      const _component_CommonMenu = _sfc_main$6;
      const _component_ContactHeader = __nuxt_component_3;
      const _component_ContactInfo = __nuxt_component_4;
      const _component_ContactForm = __nuxt_component_5;
      const _component_CommonFooter1 = _sfc_main$7;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoader, null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonMenu, null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(_component_ContactHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactInfo, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactForm, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_CommonFooter1, { subBg: true }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-xOXFU3MK.js.map
