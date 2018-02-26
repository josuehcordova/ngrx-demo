import { ActionReducerMap } from '@ngrx/store';

import { reducerUsuario } from './usuario/usuario.reducer';
import { Usuario } from '../app/shared/models';

export interface AppState {    
    usuario : Usuario;
}

export const AppReducer: ActionReducerMap<AppState> = {    
    usuario: reducerUsuario,
};

