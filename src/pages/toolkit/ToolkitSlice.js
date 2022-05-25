const { createSlice } = require('@reduxjs/toolkit');

const ToolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        isAuth: false,
        user: {},
    },
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
        },
    },
});

export default ToolkitSlice.reducer;
export const { setAuth, setUser } = ToolkitSlice.actions;
