export class AppMenuItem {
    name = '';
    icon: JSX.Element = (<svg></svg>);
    route = '';
    items: AppMenuItem[];
    active?: boolean = false;

    constructor(
        name: string,
        icon: JSX.Element,
        route: string,
        items?: AppMenuItem[]
    ) {
        this.name = name;
        this.icon = icon;
        this.route = route;

        if (items === undefined) {
            this.items = [];
        } else {
            this.items = items;
        }
    }
}
