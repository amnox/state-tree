# State Tree - Centralized State Management

## Components

* Reducer
* State Tree
* Listeners
* Action Types

## Description

This is an implementation of a state tree which centralizes state management. It can be used for updating/getting current state, and listeneng to state changes.

The state tree has three methods to interact with the state and enable listeners - getState,subscribe, dispatch.While initializing the State Object a Reducer functionis passed as an arguement.

Reducers are pure functions which alter the state in a predictible way. Based on the action type provided by the user through the dispatch method, reducer functions alter the state.

A root reducer can be used to merge the results from multiple reducers.
