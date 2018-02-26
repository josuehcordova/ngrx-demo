import { Action } from '@ngrx/store';
import { Usuario } from '../../app/shared/models';

export const SET_USUARIO = '[USUARIO] SET_USUARIO';

export class SetUsuarioAction implements Action {
    readonly type = SET_USUARIO;
  
    constructor(public usuario : Usuario) {

    }
}
  
  
export type AllActions = SetUsuarioAction;