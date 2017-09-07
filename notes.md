## Router State

A router state is an arrangement of application components that defines what is visible on the screen.

Ex:

```
[
  {
      path: '', 
      pathMatch: 'full', 
      redirectTo: '/inbox' },
  {
    "path": ":folder",
    "children": [
      {
        "path": "",
        "component": "ConversationsCmp"
      },
      {
        "path": ":id",
        "component": "ConversationCmp",
        "children": [
          {
            "path": "messages",
            "component": "MessagesCmp"
          },
          {
            "path": "messages/:id",
            "component": "MessageCmp"
          }
        ]
      }
    ]
  },
  {
    "path": "compose",
    "component": "ComposeCmp",
    "outlet": "popup"
  },
  {
    "path": "message/:id",
    "component": "PopupMessageCmp",
    "outlet": "popup"
  }
]
```


## Another defn./ of Router State
A router state is a subtree of the configuration tree.

We say activated instead of instantiated, as a component can be instantiated only once, but activated
multiple times (any time its route's parameters change)

### Not all of the sub-trees of the configuration tree are valid router states.

## Outlet

An outlet is nothing but a location in the DOM, where a component is placed. So we cannot place more than one component into the same location at the same time.


## Navigation
Navigation is the act of transitioning from router state to another.

## Router's Primary Job
The Router's primary job is to manage navigation between states, which includes updating the component
tree.

The router simply allows us to express all the potential states which our application can be in, and provides
a mechanism for navigating from one state to another.

## Well behaved - Web application
In a well behaved Web application, any application state transition results in a URL change, and any URL change
results in a state transition.

In other words, a URL is nothing but a serialized router state.

The Angular router takes care of managing the URL to make sure that it always in-sync with the router state.


## The Angular Router takes a URL, then does the following;

* Applying redirects
* Recognizing router states
* Running guards and resolving data
* Activating all the needed components
* Managing navigation


## Examples
* '/inbox/33(popup:compose) --> Serialized Secondary segments
* '/inbox/33;open=true/messages/44 --> Parameter - Value Syntax to specify route specific parameters

## Redirect

A Redirect is a substitution of a URL segment. Redirects can either be local or absolute.
Local redirects replace a single segment with a different one. Absolute redirects replace the whole
URL. Redirects are local, unless you prefix the URL with a slash.

## Router State

A router state consists of activated routes. And each activated route can be associated with a 
component. Also, note that we always have an activated route associated with the root component 
of the application.

