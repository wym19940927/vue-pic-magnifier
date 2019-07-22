import VuePicMagnifier from './src/VuePicMagnifier';
const picMagnifier = {
    install (Vue, options) {
        Vue.component(VuePicMagnifier.name, VuePicMagnifier);
    }
}
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(picMagnifier) 
}
export default picMagnifier;