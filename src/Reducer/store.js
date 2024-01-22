import { ADD, MINUS, PLUS, RESET } from "./type";

export function reducer(data, action) {
  switch (action.type) {
    case PLUS:
      return (data += 1);
    case MINUS:
      return (data -= 1);
    case RESET:
      return (data = 0);
  }
}

export function nameReducer(data, action) {
    switch (action.type){
        case ADD:
            return data = action.payload
    }
}
