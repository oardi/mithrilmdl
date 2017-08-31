import m from 'mithril';
import { Base } from './base';

export class Badge extends Base {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-badge");
        vnode.attrs.icon ? this.classList.push("material-icons") : null;
        vnode.attrs.overlap ? this.classList.push("mdl-badge--overlap") : null;
    }

    view(vnode) {
        let attributes = {};
        vnode.attrs.onclick ? attributes.onclick = (e) => vnode.attrs.onclick(e) : null;

        return (
            <span
                class={this.classList.join(" ")}
                data-badge={vnode.attrs.value}
                {...attributes}
            >
                {vnode.attrs.icon ? vnode.attrs.icon : vnode.children}
            </span>
        )
    }
}