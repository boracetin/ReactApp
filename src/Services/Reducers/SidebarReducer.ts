import { UPDATE } from '../../Layouts/Sidebar/Sidebar';

interface StateType {
    isOpen: boolean;
}

const initialState: StateType = {
    isOpen: true,
};

const SidebarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                isOpen: action.payload,
            };

        default:
            return state;
    }
};

export default SidebarReducer;
