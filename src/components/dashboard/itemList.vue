<template>
    <div>
        <div v-for="item in items" :key="item.id" class="p-6">
            <p>{{ item.name }} ${{ item.averagePrice }} / {{ item.unitOfMeasure }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    items: {
        type: Array,
        required: true
    }
  }
}
</script>
