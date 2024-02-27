import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from '../../Firebase/firebase.config'

const initialState = {
    isLoading: true,
    isError: false,
    error: '',
    name: '',
    email: '',
    profilePhotoURL: ''
}


export const FirebaseSignUp = createAsyncThunk('user/createUser', async ({ email, password, name, photo }) => {
    const data = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    await updateProfile(FirebaseAuth.currentUser, {
        displayName: name,
        photoURL: photo
    })
    return {
        email: data.user.email,
        photo: data.user.photoURL,
        name: data.user.displayName
    };
})

export const FirebaseLogin = createAsyncThunk('user/loginUser', async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    return {
        email: data.user.email,
        photo: data.user.photoURL,
        name: data.user.displayName
    };
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.email = payload.email,
                state.name = payload.name,
                state.profilePhotoURL = payload.photo
        },
        toggleLoading: (state, { payload }) => {
            state.isLoading = payload
        },
        signoutUser: (state) => {
            state.email = '',
                state.name = '',
                state.profilePhotoURL = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FirebaseSignUp.pending, (state) => {
            state.email = '',
                state.error = '',
                state.isError = false,
                state.isLoading = true,
                state.name = '',
                state.profilePhotoURL = ''
        })
            .addCase(FirebaseSignUp.fulfilled, (state, { payload }) => {
                state.email = payload.email,
                    state.error = '',
                    state.isError = false,
                    state.isLoading = false,
                    state.name = payload.name,
                    state.profilePhotoURL = payload.photo
            })
            .addCase(FirebaseSignUp.rejected, (state, action) => {
                state.email = '',
                    state.error = action.error.message,
                    state.isError = true,
                    state.isLoading = false,
                    state.name = '',
                    state.profilePhotoURL = ''
            })
        builder.addCase(FirebaseLogin.pending, (state) => {
            state.email = '',
                state.error = '',
                state.isError = false,
                state.isLoading = true,
                state.name = '',
                state.profilePhotoURL = ''
        })
            .addCase(FirebaseLogin.fulfilled, (state, { payload }) => {
                state.email = payload.email,
                    state.error = '',
                    state.isError = false,
                    state.isLoading = false,
                    state.name = payload.name,
                    state.profilePhotoURL = payload.photo
            })
            .addCase(FirebaseLogin.rejected, (state, action) => {
                state.email = '',
                    state.error = action.error.message,
                    state.isError = true,
                    state.isLoading = false,
                    state.name = '',
                    state.profilePhotoURL = ''
            })
    }
})

export const { setUser, toggleLoading, signoutUser } = userSlice.actions;
export default userSlice.reducer;