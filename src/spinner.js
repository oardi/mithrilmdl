import m from 'mithril';
import { Base } from './base';

export class Spinner extends Base {
    oninit(vnode) {
        super.oninit(vnode);
    }

    onupdate(vnode) {
        // componentHandler.downgradeElements(vnode.dom);//downgrade to reregister!
        // componentHandler.upgradeElement(vnode.dom);
        //vnode.dom.style.display = 'none'; 
    }

    view(vnode) {
        this.classList = [];
        this.classList.push("mdl-spinner", "mdl-js-spinner");
        vnode.attrs.singlecolor ? this.classList.push("mdl-spinner--single-color") : null;
        if (vnode.attrs.active && vnode.attrs.active != "false") {
            this.classList.push("is-active");
            
            //componentHandler.upgradeAllRegistered();
        }

        return (
            <div
                class={this.classList.join(" ")}
            >
            </div>
        )
    }
}