<template>
    <Splitter state-key="mykey" state-storage="local">
        <SplitterPanel :size="10" :min-size="10" class="overflow-auto px-2">
            <Listbox
                v-model="selectedItem"
                :options="itemList"
                :multiple="false"
                :filter="true"
                option-label="name"
                filter-placeholder="Search"
            >
                <template #option="slotProps">
                    <div class="flex">
                        <span class="flex-grow-1">{{ slotProps.option.name }}</span>
                        <Tag class="flex" :value="`\$${slotProps.option.averagePrice} / ${slotProps.option.unitOfMeasure}`" />
                    </div>
                </template>
            </Listbox>
        </SplitterPanel>
        <SplitterPanel :size="90" :min-size="80" class="overflow-auto">
            <div class="grid">
                <div class="col-4">
                    <Skeleton class="h-6rem w-full" />
                </div>
                <div class="col-4">
                    <Skeleton class="h-6rem w-full" />
                </div>
                <div class="col-4">
                    <Skeleton class="h-6rem w-full" />
                </div>
                <div class="col-8">
                    <Skeleton class="h-18rem w-full" />
                </div>
                <div class="col-4">
                    <div class="flex-grow-1">
                        <Skeleton width="10rem" class="mb-2" />
                        <Skeleton width="5rem" class="mb-2" />
                        <Skeleton width="10rem" class="mb-2" />
                        <Skeleton width="5rem" class="mb-2" />
                        <Skeleton width="10rem" class="mb-2" />
                        <Skeleton width="5rem" class="mb-2" />
                    </div>
                </div>
                <div v-for="index in 6" :key="index" class="col-12">
                    <div class="flex mb-3 align-items-center">
                        <Skeleton shape="circle" size="4rem" class="mr-2" />
                        <div class="flex-grow-1">
                            <Skeleton width="10rem" class="mb-2" />
                            <Skeleton width="5rem" class="mb-2" />
                        </div>
                        <Skeleton width="3rem" />
                    </div>
                </div>
            </div>
        </SplitterPanel>
    </Splitter>
</template>

<script>
import { mapState } from 'pinia'
import { useGroceryStore } from '../stores/grocery'

export default {
    data: () => {
        return {
            selectedItem: null,
            filteredItems: null
        }
    },
    computed: {
        ...mapState(useGroceryStore, ['itemList'])
    },
    methods: {
        searchItem(event) {
            setTimeout(() => {
                if (!event || !event.query.trim().length) {
                    this.filteredItems = [...this.itemList]
                }
                else {
                    this.filteredItems = this.itemList.filter((item) => {
                        return item.name.toLowerCase().startsWith(event.query.toLowerCase())
                    })
                }
            }, 250)
        },
    }
}
</script>
<style>
.grid {
    margin: 0;
}
.p-splitter {
    border: none;
}
.p-splitter-gutter {
    border-right: 1px solid #dee2e6;
    border-left: 1px solid #dee2e6;
}
.p-listbox {
    border: none;
}
.p-listbox .p-listbox-list .p-listbox-item {
    padding: 0.5rem 0;
}
.p-listbox .p-listbox-header {
    padding: 0 0 0 0;
}
</style>
