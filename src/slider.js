import m from 'mithril';
import { Base } from './base';

export class Slider extends Base {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("custom-slider");

        this.attributes = {};
        // vnode.attrs.value ? this.attributes.value = vnode.attrs.value : this.attributes.value = 0;//should be initial

        vnode.attrs.step ? this.attributes.step = vnode.attrs.step : this.attributes.step = 1;

        this.attributes.oninput = (e) => {
            this.currentValue = e.target.value;
            if (vnode.attrs.oninput) vnode.attrs.oninput(e);
            this.setStyle(vnode.dom, this.attributes.min, this.attributes.max, e.target.value)
        }

        this.attributes.onchange = (e) => {
            this.currentValue = e.target.value;
            if (vnode.attrs.onchange) vnode.attrs.onchange(e);
            this.setStyle(vnode.dom, this.attributes.min, this.attributes.max, e.target.value)
        }

        this.currentValue = vnode.attrs.value ? vnode.attrs.value : 0;
    }

    oncreate(vnode) {
        this.setStyle(vnode.dom, this.attributes.min, this.attributes.max)
    }

    setStyle(element, min, max) {
        if (min && max)
            element.style.backgroundSize = (this.currentValue - min) * 100 / (max - min) + '% 100%';
        else
            element.style.backgroundSize = `${this.currentValue ? this.currentValue : 0}% 100%`;
    }

    view(vnode) {
        vnode.attrs.min ? this.attributes.min = vnode.attrs.min : this.attributes.min = 0;
        vnode.attrs.max ? this.attributes.max = vnode.attrs.max : this.attributes.max = 100;

        return (
            <input class={this.classList.join(" ")} type="range" {...this.attributes} value={this.currentValue} />
        )
    }
}