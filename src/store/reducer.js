export const reducer = (state, action) => {
    switch (action.type) {

        case "set_data_todo":
            return { ...state, todoData: [...action.payload] };

        case "set_selected_todo":
            return { ...state, selectedTodo: { ...action.payload } };

        case "set_status_select":
            return { ...state, selected: action.payload};

        case "set_status_modify":
            return { ...state, modify: action.payload};

        case "set_status_add":
            return { ...state, add: action.payload};

        default:
            return state;
    }
};

export const initialState = {
    todoData: [],
    selectedTodo: {},
    selected: false,
    modify: false,
    add: false,
};
