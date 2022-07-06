<template>
    <div class="home">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="d-flex align-items-center justify-content-start mt-3">
                                    <label for="" class="me-3">Check all</label><br>
                                    <input 
                                        type="checkbox" 
                                        v-model="isAll" 
                                        @click="checkAll" 
                                        class="rounded-0 bg-dark me-3" 
                                        style="height: 35px; width: 35px;"
                                    >
<!--                                    <label for="">Delet all</label>-->
                                    <div class="btn btn-outline d-flex align-items-center" @click="deleteAll" v-show="this.isAll">
                                      <label for="">Delet all</label>
                                        <span class="material-icons text-danger ms-2">delete</span>  
                                    </div>                                  
                                </div>
                            </div>
                            <div class="col-md-12 mt-5" v-if="checkboxes.length > 0">
                                <div 
                                    class="d-flex justify-content-start align-items-center border p-3" 
                                    v-for="(item, index) in checkboxes" 
                                    :key="index"
                                >
                                    <span class="fw-bold me-3"> {{ index + 1 }}. </span>
                                     <input 
                                        type="checkbox" 
                                        @click="checkArr(index)" 
                                        v-model="item.isChecked" 
                                        class="rounded-0 bg-dark" 
                                        style="height: 20px; width: 20px;"
                                    >
                                     <div 
                                        class="is_checked mx-5" 
                                        :class="!item.isChecked ? 'text-danger' : 'text-primary fw-bold'"
                                    > 
                                    {{ item.isChecked }} 
                                    </div>
                                     <div> {{ item.text }} </div>
                                     <button 
                                        class="btn btn-outline border-0 ms-auto" 
                                        @click="deleteItem(index)" 
                                        v-show="item.isChecked"
                                    >
                                         <span class="text-danger material-icons">remove_circle</span> 
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-12 mt-5" v-else>
                                <h2 class="text-center text-primary">
                                    No items to show
                                </h2>
                            </div>
                        </div>
                    </div>         
    </div>
</template>

<script>
export default {
    name:'Home',
    data: () => ({
        isAll: false,
        checkboxes: [
            { isChecked: false, text: 'Lorem ipsum dolor  1111?' },
            { isChecked: false, text: 'Lorem ipsum dolor sit 2222?' },
            { isChecked: false, text: 'Lorem ipsum dolor sit amet  33333?' },
            { isChecked: false, text: 'Lorem ipsum dolor sit amet 44444?' },
            { isChecked: false, text: 'Lorem ipsum dolor sit amet 55555?' },
            { isChecked: false, text: 'Lorem ipsum dolor sit amet  66666?' }
        ],
        selected: []
    }),
    methods: {
        checkAll () {
            this.checkboxes.filter(item => {
                this.isAll ? item.isChecked = false : item.isChecked = true
            })
        },
        checkArr (index) {
            this.checkboxes.filter((item, ind) => {
                if(index === ind && this.checkboxes[index].isChecked === false){
                    this.selected.push(item)
                }else if(index === ind && this.checkboxes[index].isChecked === true){
                    this.selected.splice(index, 1)
                }
             this.selected.length === this.checkboxes.length ? this.isAll = true : this.isAll = false
            })
        },
        deleteItem(index) {
            this.checkboxes.map((it, ind) =>{
                if(it.isChecked === true && index === ind){
                    this.checkboxes.splice(index, 1)
                }
            })
        },
        deleteAll() {
            this.checkboxes = []
            this.isAll = false
        }
    }
}
</script>

<style scoped>
.row.wrapper{
    height: 100vh;
}
</style>