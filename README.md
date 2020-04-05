# 🔥 Start your next react project in seconds 🔥

## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone -o react-boilerplate -b master --single-branch https://github.com/calledmeanh/react-boilerplate.git <YOUR_PROJECT_NAME>`.
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
4.  Run `yarn && yarn install` in order to install dependencies and clean the git repo.
    _At this point you can run `yarn start` to see the example app at `http://localhost:3000`._
5.  Run `yarn run build` in order to compiled for production.
    Now you're ready to rumble!

## Documentation

Before you start, take a moment to see how the project structure looks like:

```
.
├── /node_modules/                      # 3rd-party libraries and utilities
├── /public/                            # Static files
├── /src/                               # The source code of the application
│   ├── /app/                           # Where you store your React components
│       ├── /commons/                       # Reusable components (<Button/>, <Nav/>,...)
│       ├── /components/                    # Dump components (take props and render UI)
│       ├── /containers/                    # Smart components (call api)
│       ├── /hocs/                          # High Order Components
│       ├── /hooks/                         # Hook Components
│       ├── /layouts/                       # Layout Structures (top-bottom, lef-right)
│       ├── /motions/                       # Motions components
|       ├── /motions/                       # Motions components
│       ├── /redux/                         # Integrated Redux
│       ├── /App.tsx                        # Root file for React Components
│   ├── /assets/                        # Where you store your fonts, images, styles (scss)
│   ├── /environments/                  # Where you store your environment variables
│   ├── /libs/                          # Where you store your custom libraries
│   ├── /models/                        # Where you store your component models for the application
│   ├── /routes/                        # Where you store the whole route for the application
│   ├── /utils/                         # Where you store your helper functions
│   ├── index.tsx                       # Root file
├── ...
```

### Quick Walkthrough for Components

1. First open the `index.tsx` file

You will see that I already configed `react-router-dom`, `redux`, `antd`, `styles`. I seprated two kind of imports (libs & apps):

- Libs are the npm package that you install
- Apps are the relative path of file for your application

Look at the code below, you will see there are 2 kind of layout structures: `TopBottom` and `LeftRight`

```
<App>
    <h1 style={{ textAlign: 'center' }}>Top Bottom Layout Structure</h1>
    <TopBottomLayout />
    <h1 style={{ textAlign: 'center' }}>Left Right Layout Structure</h1>
    <LeftRightLayout />
</App>
```

> You pick the one you like and comment the left one out for later use or you can delete it if you want

After you picked the layout structure:

_*#TopBottomLayout*_

> Click on the component and press `F12` to navigate the component and you will see this code

```
<Layout className="top-bottom-layout">
    <Header>Header</Header>
    <Content>
        <Switch>
            <Route path="/" component={ExampleContainer} />
        </Switch>
    </Content>
    <Footer>
        Ant Design ©2018 Created by Ant UED <br />
        Customized by Hoang Anh
    </Footer>
</Layout>
```

I already made my first component `Example` (container) and put it in `Route`.
Please navigate to it and see what happens in there

> Here is the code:

```
declare module ExampleContainerModule {
  export type Props = {
    example?: AppState.BaseState<ExampleModel>;
    actions?: typeof ExampleActions;
  };

  export type State = {};
}
@connect(
  (state: RootState) => {
    return {
      example: state.example,
    };
  },
  (dispatch: Dispatch) => ({
    actions: bindActionCreators(Object.assign(ExampleActions), dispatch),
  })
)
class ExampleContainer extends React.Component<ExampleContainerModule.Props, ExampleContainerModule.State> {
  componentDidMount() {
    this.props.actions!.loadExample({ url: '/todos/1' });
  }

  render() {
    return <ExampleComponent example={this.props.example} />;
  }
}

export default ExampleContainer;
```

There are 3 parts that you need to know:

1. First I declared a module which provide a type definition for `Props` & `State`

```
declare module ExampleContainerModule {
  export type Props = {
    example?: AppState.BaseState<ExampleModel>;
    actions?: typeof ExampleActions;
  };

  export type State = {};
}
```

2. Second, I connected Redux with React by using `@connect() decorator` (you can find this decorator in `libs` folder).
   > You can navigate to `redux` folder to find out more...

```
@connect(
  (state: RootState) => {
    return {
      example: state.example,
    };
  },
  (dispatch: Dispatch) => ({
    actions: bindActionCreators(Object.assign(ExampleActions), dispatch),
  })
)
```

3. Finally, I called `loadExample` action to call an api. If you navigate to `actions` folder you will see there are 2 files (`example` and `index`). In `example` action file, I already defined the actions by using `redux-actions` lib.

> Here is the code in example action file:

```
export const loadExampleActions = createActions({
  LOAD_EXAMPLE_START: (loading) => loading,
  LOAD_EXAMPLE_SUCCESS: (data) => data,
  LOAD_EXAMPLE_FAILURE: (error) => error,
});
```

And down below is a function to call an api. I wrote some code to call an api in the `api.util.ts` file in `utils` folder (please check it out).

> Here is the code in api.util.ts file

```
class Api {
  private axiosInstance: AxiosInstance;
  constructor() {
    const axiosRequestConfig: AxiosRequestConfig = {
      baseURL: getEnvironment().constants.api_domain,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    const axiosInstance: AxiosInstance = Axios.create(axiosRequestConfig);

    this.axiosInstance = axiosInstance;
  }

  get(input: { url: string; config?: AxiosRequestConfig }) {
    return this.axiosInstance
      .get(input.url, input.config)
      .then((res) => res)
      .catch((error) => {
        if (error.response) {
          let description: string = error.response.statusText;
          notification.error({ message: errorMessage.BASE, description });
        } else {
          notification.error({
            message: errorMessage.BASE,
            description: errorMessage.CONNECTION,
          });
        }
      });
  }
}
```

I also configed the api url in `environment` folder. In `environment` folder, I used this api for testing `https://jsonplaceholder.typicode.com` (change it to your api)

> Here is the code:

```
constants: {
    /* ==========Base========= */
    api_domain: 'https://jsonplaceholder.typicode.com',
    server_domain: 'https://jsonplaceholder.typicode.com',
    base_url: 'https://jsonplaceholder.typicode.com',
    /* ==========Base========= */
  }
```

> Now let's comeback to the example file to see a function
```
// a function to call an api
const loadExample = (input: { url: string; config?: AxiosRequestConfig }) => (
  dispath: Dispatch,
  getState: () => RootState
) => {
  dispath(
    loadExampleActions.loadExampleStart({
      ...getState().example,
      loading: true,
    })
  );
  apiUtil
    .get({ url: input.url, config: input.config })
    .then((res: any) => {
      dispath(
        loadExampleActions.loadExampleSuccess({
          ...getState().example,
          loading: false,
          data: { ...res.data },
        })
      );
    })
    .catch((error) => {
      dispath(
        loadExampleActions.loadExampleFailure({
          ...getState().example,
          loading: false,
          error: error,
        })
      );
    });
};
```

> Called an action

```
class ExampleContainer extends React.Component<ExampleContainerModule.Props, ExampleContainerModule.State> {
  componentDidMount() {
    this.props.actions!.loadExample({ url: '/todos/1' });
  }

  render() {
    return <ExampleComponent example={this.props.example} />;
  }
}
```

After called an API, I passed it down to child component through props in order to render the data. When you open the child component, you will notice that I used a hook component for testing ^_^ (just for fun)

> Here is the code
```
const ExampleComponent: React.FC<ExampleComponentModule.Props> = (props) => {
  let time = useExample({ time: 100 });
  return (
    <div>
      <div>{time}</div>
      <div>{JSON.stringify(props.example)}</div>
    </div>
  );
};
```

> And the code for hook component
```
const useExample = (props: UseExampleModule.Props) => {
  let [time, setTime] = useState(props.time);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(++time);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return time;
};
```

_*#LeftRightLayout*_

This is the same with TopBottomLayout but I used `routes` file in the `routes` folder to loop through each element

> Here is the different

```
<Menu theme="dark" mode="inline">
    {routes.map((route, index) => (
        <Menu.Item key={index}>
            <img className="icon" src={route.icons[0].active} alt="icon" />
                {this.state.collapsed ? null : (
                  <NavLink to={route.path}>
                    <span>{route.nameEn}</span>
                  </NavLink>
                )}
        </Menu.Item>
    ))}
</Menu>
```

```
<Content>
    {routes.map((route, index) => (
        <Route key={index} path={route.path} component={route.component} />
    ))}
</Content>
```


### Quick Walkthrough for Styles

Navigate to `style` folder and you will see there are threes folers inside `app` & `system`:
- app: your syles for the component
- system: your design system


### And there are other files such as:
 - `/models/`rootState.model.ts: type definition for the whole application
 - `/utils/`message.util.ts: the message for the whole application
 - `/utils/`image.util.ts: helper function
 - `/utils/`token.util.ts: helper function

## License

This project is licensed under the MIT license, Copyright (c) 2020 Nguyen Hoang Anh. For more information see `LICENSE.md`.
