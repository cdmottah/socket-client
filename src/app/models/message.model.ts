// Enum para los tipos de mensaje
export enum MessageType {
  Text = 'text',
  Image = 'image',
}

// Interfaz base con las propiedades comunes
export interface BaseMessage {
  type: MessageType; // Tipo del mensaje
  from: string;      // Nombre de usuario
  date?: string,
}

// Mensaje de texto
export interface TextMessage extends BaseMessage {
  type: MessageType.Text;
  content: {
    text: string; // Contenido del texto
  };
}

// Mensaje de imagen
export interface ImageMessage extends BaseMessage {
  type: MessageType.Image;
  content: {
    url: string;  // URL de la imagen
    alt?: string; // Texto alternativo opcional
  };
}

// Unión de tipos para un mensaje genérico
export type Message = TextMessage | ImageMessage;
