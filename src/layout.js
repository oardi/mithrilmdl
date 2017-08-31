import m from 'mithril';
import { Base } from './base';

export class Layout extends Base {
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

export class LayoutHeader extends Base {
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

export class LayoutHeaderRow extends Base {
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

export class LayoutTitle extends Base {
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

export class LayoutContent extends Base {
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

import { Navigation } from './navigation';
export class LayoutDrawer extends Base {
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

export class LayoutSpacer extends Base {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-layout-spacer");
    }
    view(vnode) {
        return <div class={this.classList.join(" ")} />;
    }
}