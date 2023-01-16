/* eslint-disable @next/next/no-img-element */
import { ItemEntity } from "@domain/entities";
import { usecases, DTO } from "../api/items";
import { useForm } from "react-hook-form";

// New item component

interface FormSchema {
  title: string;
  description?: string;
  imageUrl?: string;
}

function NewItem() {
  const hookForm = useForm<FormSchema>();

  async function handleSubmit(form: FormSchema) {
    const data: DTO = {
      name: form.title,
      description: form.description,
      imageUrl: form.imageUrl,
    };

    fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      hookForm.reset();
    });
  }

  return (
    <div>
      <form id="createItem" onSubmit={hookForm.handleSubmit(handleSubmit)}>
        <label>
          Title
          <input
            {...hookForm.register("title")}
            id="title"
            type="text"
            required
          />
        </label>
        <label>
          Description
          <input
            {...hookForm.register("description")}
            id="description"
            type="text"
          />
        </label>
        <label>
          Image URL
          <input {...hookForm.register("imageUrl")} id="imageUrl" type="text" />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

// Items page

type Props = {
  items: ItemEntity[];
};

export default function Items(props: Props) {
  return (
    <div>
      <span>
        <h1>Items</h1>
        <button>New item</button>
      </span>

      <NewItem />

      {props.items.length && (
        <ul>
          {props.items.map((item, index: any) => (
            <li key={index}>
              <h4>{item.name}</h4>
              <img width={50} height={50} src={item.imageUrl} alt={item.name} />
              <p>{item.description}</p>
              <a href="/catalog/1">Add to cart</a>
            </li>
          ))}
        </ul>
      )}

      {!props.items.length && <p>No items found</p>}
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      items: await usecases.listItems.exec(),
    },
  };
}
