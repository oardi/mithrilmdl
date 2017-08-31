import m from 'mithril';
import { Base } from './base';

export class Card extends Base {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-card", "mdl-shadow--2dp");
    }

    view(vnode) {
        return (
            <div class={this.classList.join(" ")}>
                {
                    vnode.attrs.title ?
                        <CardTitle title={vnode.attrs.title} subtitle={vnode.attrs.subtitle} />
                        : null
                }

                {
                    vnode.attrs.text ?
                        <CardSupportingText text={vnode.attrs.text} />
                        : null
                }

                {
                    vnode.attrs.actions ?
                        <CardActions>{vnode.attrs.actions}</CardActions>
                        : null
                }

                {
                    vnode.attrs.menu ?
                        <CardMenu>{vnode.attrs.menu}</CardMenu>
                        : null
                }

                {vnode.children}
            </div>
        )
    }
}

export class CardTitle {

    view(vnode) {
        return (
            <div class="mdl-card__title mdl-card--expand">
                {vnode.attrs.title ? <CardTitleText title={vnode.attrs.title} /> : null}
                {vnode.attrs.subtitle ? <CardSubtitleText subtitle={vnode.attrs.subtitle} /> : null}
            </div>
        )
    }
}

export class CardTitleText {
    view(vnode) {
        return (
            <h2 class="mdl-card__title-text">{vnode.attrs.title}</h2>
        )
    }
}

export class CardSubtitleText {
    view(vnode) {
        return (
            <div class="mdl-card__subtitle-text">{vnode.attrs.subtitle}</div>
        )
    }
}

export class CardSupportingText {
    view(vnode) {
        return (
            <div
                class="mdl-card__supporting-text"
            >
                <div style="padding: 16px;">
                    {vnode.attrs.text ? vnode.attrs.text : vnode.children}
                </div>
            </div>
        )
    }
}

export class CardActions { // mdl-card--border
    oninit(vnode) {
        this.classList = ["mdl-card__actions"];
        vnode.attrs.border ? this.classList.push("mdl-card--border") : null;
    }

    view(vnode) {
        return (
            <div
                class={this.classList.join(" ")}
                style="overflow-x: auto;"
            >
                {vnode.children}
            </div>
        )
    }
}

export class CardMenu {
    view(vnode) {
        return (
            <div class="mdl-card__menu">
                {vnode.children}
            </div>
        )
    }
}

//mdl-card--border