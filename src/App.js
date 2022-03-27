import { useEffect } from 'react';
import { Header, Card } from 'components';
import { useStore } from "store/context";
import { getDataTodo } from "store/actions";
import { Section, CardContainer } from 'containers';

function App() {

  const { state, dispatch } = useStore();

  const fetchData = async () => {

    const data = await getDataTodo();

    dispatch({
      type: "set_data_todo",
      payload: data,
    });

  }

  useEffect(() => {

    fetchData();

  }, []);

  return (
    <>
      <Header />
      {state && (state.selected && Object.keys(state.selectedTodo).length > 0) &&
        <Card type="big" data={state.selectedTodo} />
      }
      {state && (state.modify && Object.keys(state.selectedTodo).length > 0) &&
        <Card type="modify" data={state.selectedTodo} />
      }
      {state && state.add &&
        <Card type="modify" />
      }
      <Section title="Finished Task">
        <CardContainer data={state && state.todoData} type="finished" />
      </Section>
      <Section title="Unfinished Task">
        <CardContainer data={state && state.todoData} type="unfinished" />
      </Section>
    </>
  );
}

export default App;
