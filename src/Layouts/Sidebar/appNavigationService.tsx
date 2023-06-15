import { AppMenu } from './appMenu';
import { AppMenuItem } from './appMenuItem';

export class AppNavigationService {
    getMenu = (): AppMenu => {
        return new AppMenu('MainMenu', '', [
            new AppMenuItem('HOME', this.getMenuIcon(0), '/app/my-inbox'),
            new AppMenuItem('NEWS', this.getMenuIcon(0), '/app/my-inbox'),

            new AppMenuItem(
                'Administration',
                this.getMenuIcon(0),
                '/app/my-inbox'
            ),
            new AppMenuItem('LOG OUT', this.getMenuIcon(0), '/app/my-inbox'),
        ]);
    };
    getMenuIcon = (index: number, color: string = '#D2D1D4'): JSX.Element => {
        const iconArray: JSX.Element[] = [
            <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.5 14V7L7.5 1L14.5 7V14C14.5 14.5523 14.0523 15 13.5 15H9.5V12C9.5 10.8954 8.60457 10 7.5 10C6.39543 10 5.5 10.8954 5.5 12V15H1.5C0.947715 15 0.5 14.5523 0.5 14Z"
                    fill="#E6ECFF"
                    stroke="#003CFF"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                />
            </svg>,
        ];

        return iconArray[index];
    };
}
