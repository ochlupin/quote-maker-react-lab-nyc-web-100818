export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      return state.map(quote =>
        quote.id === action.quoteId ? { ...quote, votes: quote.votes + 1 } : quote
      );
    case 'DOWNVOTE_QUOTE':
      const quote = state.find(quote => quote.id === action.quoteId);
      if (quote.votes === 0) return state;
      return state.map(quote =>
        quote.id === action.quoteId ? { ...quote, votes: quote.votes - 1 } : quote
      );
    default:
      return state;
  }
};
