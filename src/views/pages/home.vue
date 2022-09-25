<template>
  <div class="full-width flex q-mb-lg items-center justify-end">
    <q-btn color="primary" glossy>
      <q-icon class="fa-solid fa-add" left size="xs"/>
      Novo Pedido
    </q-btn>
  </div>

  <q-card class="shadow-0">
    <div class="bg-primary glossy q-pa-sm"></div>

    <q-card-section>
      <q-table
          :columns="columns"
          :filter="filter"
          :rows="rows"
          :rows-per-page-options="[15,25,35,55]"
          grid
          hide-header
          row-key="name"
          title="Mesas - pedidos"
      >
        <template #top-right>
          <q-input v-model="filter" borderless debounce="300" dense filled placeholder="Pesquisar">
            <template v-slot:append>
              <q-icon name="search"/>
            </template>
          </q-input>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import {QTableColumn} from "quasar";
import {ref} from "vue";
import {ClientEntity} from "~entity/client.entity";
import ClientRequestEntity from "~entity/client-request.entity";
import {ENUM_PIZZA_STATUS} from "@/models/util/enum-pizza-status";
import PizzaEntity from "~entity/pizza.entity";
import {ENUM_PIZZA_SIZE} from "@/models/util/enum-pizza-size";
import {ContentEntity} from "~entity/content.entity";

const filter = ref('')

const columns: Array<QTableColumn<ClientEntity>> = [
  {
    name: 'table',
    required: true,
    label: 'Mesa',
    align: 'left',
    field: (row) => row.table,
    format: (val) => `Mesa nª ${val}`,
    sortable: true
  },
  {
    name: 'name',
    required: false,
    label: 'Cliente',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
  },
  {
    name: 'request_status',
    required: false,
    label: 'Status',
    align: 'left',
    field: (row) => row.requests[0].status,
    format: (val) => `${val}`,
  },
  {
    name: 'request_order_time',
    required: false,
    label: 'Data e Hora do Pedido',
    align: 'left',
    field: (row) => row.requests[0].order_time,
    format: (val) => `${new Intl.DateTimeFormat('pt-BR', {dateStyle: "short", timeStyle: "short"}).format(val)}`,
    sortable: true
  },
  {
    name: 'price',
    required: false,
    label: 'Total',
    align: 'left',
    field: (row) => row.price.toLocaleString('pt-br', {
      compactDisplay: 'short',
      maximumFractionDigits: 2,
    }),
    format: (val) => `R$ ${val}`,
  },
]

const rows: Array<ClientEntity> = [
  new ClientEntity({
    id: "1",
    table: 1,
    name: "Luiz H",
    requests: [
      new ClientRequestEntity({
        id: "1",
        status: ENUM_PIZZA_STATUS.REQUEST,
        pizzas: [
          new PizzaEntity({
            id: "1",
            size: ENUM_PIZZA_SIZE.LARGE,
            name: "Carne seca",
            contents: [
              new ContentEntity({
                id: "1",
                price: 21.9,
                name: "carne seca"
              }),
              new ContentEntity({
                id: "1",
                price: 8.44,
                name: "Queijo"
              }),
              new ContentEntity({
                id: "1",
                price: 10.2,
                name: "Molho ao sugo"
              })
            ]
          })
        ]
      })
    ]
  })
]
</script>

<style scoped>

</style>
