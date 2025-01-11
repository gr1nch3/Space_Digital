import { useSSRContext, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { c as _imports_0 } from './Menu-DZL1Uwiv.mjs';

const _sfc_main = {
  __name: "Footer1",
  __ssrInlineRender: true,
  props: {
    subBg: Boolean
  },
  setup(__props) {
    const currentYear = ref((/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: { "sub-bg": __props.subBg }
      }, _attrs))}><div class="footer-container"><div class="container pb-80 pt-80 ontop"><div class="row"><div class="col-lg-6"><div class="eml"><h6 class="sub-title opacity-8"> we would love to hear from you. </h6><h2 class="underline fz-60"><a href="mailto:hello@spaceedigital.com">hello@spaceedigital.com</a></h2></div></div></div><div class="row mt-80"><div class="col-lg-3"><div class="logo"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-6"><div class="column"><h6 class="sub-title mb-30">Social Media</h6><ul class="rest"><li class="hover-this cursor-pointer"><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/space.digitals" class="hover-ani">Facebook</a></li><li class="hover-this cursor-pointer"><a target="_blank" rel="noopener noreferrer" href="https://www.x.com/spaceedigital" class="hover-ani">twitter</a></li><li class="hover-this cursor-pointer"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/spaceedigital" class="hover-ani">LinkedIn</a></li><li class="hover-this cursor-pointer"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/spacee.digital" class="hover-ani">Instagram</a></li></ul></div></div><div class="col-lg-3"><div class="column"><h6 class="sub-title mb-30">Our Office :</h6><p>Old Road Monrovia, Liberia</p><h5 class="mt-15"><a href="tel:+231 881 791 949">+231 881 791 949</a></h5></div></div></div></div><div class="container bord pt-30 pb-30 bord-thin-top"><div class="row"><div class="col-lg-6"><div class="links"><ul class="rest"><li><a href="/about" class="animsition-link">FAQ</a></li><li><a href="/about" class="animsition-link">Careers</a></li><li><a href="/contact" class="animsition-link">Contact Us</a></li><li><a href="/pricing" class="animsition-link">Pricing</a></li></ul></div></div><div class="col-lg-6"><div class="copyright d-flex"><div class="ml-auto"><p class="fz-13"> \xA9 <span id="currentyear">${ssrInterpolate(unref(currentYear))}</span> All Rights Reserved </p></div></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Footer1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Footer1-B2fp7HaU.mjs.map
