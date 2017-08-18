import m from 'mithril';
import { MdlBase } from './mdl-base';

export class MdlLayout extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-layout", "mdl-js-layout", "mdl-layout--fixed-header", "mdl-layout--no-drawer-button");

        vnode.attrs.fixedDrawer && vnode.attrs.fixedDrawer != false ? this.classList.push("mdl-layout--fixed-drawer") : null;
    }

    view(vnode) {
        return (
            <div class={this.classList.join(" ")}>
                {vnode.children}
            </div>
        )
    }
}

export class MdlLayoutHeader extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-layout__header");
    }
    view(vnode) {
        return (
            <header class={this.classList.join(" ")}>
                {vnode.children}
            </header>
        )
    }
}

export class MdlLayoutHeaderRow extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-layout__header-row");
    }
    view(vnode) {
        return (
            <div class={this.classList.join(" ")}>{vnode.children}</div>
        )
    }
}

export class MdlLayoutTitle extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-layout-title");
    }
    view(vnode) {
        return (
            <span class={this.classList.join(" ")}>
                {vnode.attrs.title ? vnode.attrs.title : vnode.children}
            </span>
        )
    }
}

export class MdlLayoutContent extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-layout__content");
    }
    view(vnode) {
        return (
            <main class={this.classList.join(" ")}>
                <div class="page-content">
                    {vnode.children}
                </div>
            </main>
        )
    }
}

import { MdlNavigation } from './mdl-navigation';
export class MdlLayoutDrawer extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-layout__drawer");
    }

    oncreate() {
        let mdlLayout = document.querySelector(".mdl-layout");
        mdlLayout.classList.remove("mdl-layout--no-drawer-button");
    }

    view(vnode) {
        return (
            <div class={this.classList.join(" ")}>
                <span class="mdl-layout-title mdl-color--primary mdl-color-text--white">
                    {vnode.attrs.title}
                </span>
                {vnode.children}
            </div>
        );
    }
}

export class MdlLayoutSpacer extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-layout-spacer");
    }
    view(vnode) {
        return <div class={this.classList.join(" ")} />;
    }
}