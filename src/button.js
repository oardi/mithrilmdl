import m from 'mithril';
import { Icon } from './icon';
import { Base } from './base';

export class Button extends Base {
    oninit(vnode) {
        super.oninit(vnode);

        this.classList.push("mdl-button", "mdl-js-button", "mdl-js-ripple-effect");
        vnode.attrs.raised ? this.classList.push("mdl-button--raised") : null;
        vnode.attrs.colored ? this.classList.push("mdl-button--colored") : null;
        vnode.attrs.accent ? this.classList.push("mdl-button--accent") : null;
        vnode.attrs.icon && !vnode.attrs.fab ? this.classList.push("mdl-button--icon") : null;
        vnode.attrs.fab ? this.classList.push("mdl-button--fab") : null;
        vnode.attrs.minifab ? this.classList.push("mdl-button--mini-fab") : null;
    }

    view(vnode) {
        let attributes = {};
        vnode.attrs.onclick ? attributes.onclick = (e) => vnode.attrs.onclick(e) : null;

        return (
            <button
                type={vnode.attrs.type ? vnode.attrs.type : "button"}
                class={this.classList.join(" ")}
                {...attributes}
            >
                {
                    vnode.attrs.icon && vnode.children.length == 0 ? <Icon icon={vnode.attrs.icon} /> :
                        vnode.attrs.title ? vnode.attrs.title : vnode.children
                }
            </button>
        )
    }
}