import m from 'mithril';
import { MdlBase } from './mdl-base';

export class MdlNavigation extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-navigation");
    }

    view(vnode) {
        return (
            <nav class={this.classList.join(" ")}>
                {vnode.children}
            </nav>
        );
    }
}

export class MdlNavigationLink extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-navigation__link");
    }

    closeMenu() {
        // let layout = document.querySelector('.mdl-layout');
        // //nur, wenn opened
        // layout.MaterialLayout.toggleDrawer();
        let drawerIsVisible = document.querySelector('.mdl-layout__drawer.is-visible');
        if (drawerIsVisible) {
            let layout = document.querySelector('.mdl-layout');
            layout.MaterialLayout.toggleDrawer();
        }
    }

    view(vnode) {
        return (
            <a
                class={this.classList.join(" ")}
                onclick={vnode.attrs.onclick ? (e) => { e.stopPropagation(); this.closeMenu(); vnode.attrs.onclick() } : () => this.closeMenu()}
                href={vnode.attrs.href}>
                {vnode.attrs.text ? vnode.attrs.text : vnode.children}
            </a>
        )
    }
}