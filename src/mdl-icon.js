import m from 'mithril';
import { MdlBase } from './mdl-base';

export class MdlIcon extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);

        this.customClassList = [];
        this.customClassList = vnode.attrs.class ? vnode.attrs.class.split(" ") : null;
        this.classList.push("material-icons");
        vnode.attrs.avatar ? this.classList.push("mdl-list__item-avatar") : null;
    }

    view(vnode) {
        let attributes = {};
        vnode.attrs.onclick ? attributes.onclick = (e) => vnode.attrs.onclick(e) : null;

        this.classList = [];
        //add custom classes back in
        if (this.customClassList)
            this.classList = this.classList.concat(this.customClassList);

        this.classList.push("material-icons");
        vnode.attrs.color ? this.classList.push(`mdl-color-text--${vnode.attrs.color}`) : null;
        vnode.attrs.avatar ? this.classList.push("mdl-list__item-avatar") : null;

        return (
            <i
                class={this.classList.join(" ")}
                {...attributes}
            >
                {vnode.attrs.icon ? vnode.attrs.icon : vnode.children}
            </i>
        )
    }
}