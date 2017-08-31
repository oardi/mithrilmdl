import m from 'mithril';
import { LayoutHeaderRow } from './layout';

export class Toolbar {
    oninit(vnode) {
        this.vnode = vnode;
    }

    oncreate() {
        let mdToolbar = document.querySelector(".mdl-layout__header");
        mdToolbar.appendChild(this.vnode.dom);
    }

    onremove() {
        let mdToolbar = document.querySelector(".mdl-layout__header");
        if (mdToolbar && this.vnode.dom)
            mdToolbar.removeChild(this.vnode.dom);
    }

    view(vnode) {
        return (
            <LayoutHeaderRow>{vnode.children}</LayoutHeaderRow>
        )
    }
};