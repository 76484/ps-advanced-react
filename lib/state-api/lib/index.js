class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: "",
    };

    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  lookupAuthor(authorId) {
    return this.data.authors[authorId];
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getState() {
    return this.data;
  }

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange,
    };

    this.notifySubscribers();
  };

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({ searchTerm });
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((subscriber) => subscriber());
  };

  subscribe = (callback) => {
    this.subscriptions[++this.lastSubscriptionId] = callback;
    return this.lastSubscriptionId;
  };

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  };
}

export default StateApi;
