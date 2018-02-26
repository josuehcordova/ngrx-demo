import { AllActions, SET_USUARIO } from './usuario.actions';
import { Usuario } from '../../app/shared/models';

export function reducerUsuario (state: Usuario = null, action: AllActions) : Usuario{
    if (action === null) {
      return state;
    }
    
    switch (action.type) {

      case SET_USUARIO: {
        return action.usuario;
      }

      default: {
        return state;
      }
    }
  }