<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryRef"
      :inline="true"
      v-show="showSearch"
    >
      <el-form-item label="企业名称" prop="fileName">
        <el-input
          v-model="queryParams.fileName"
          placeholder="请输入企业名称"
          clearable
          style="width: 200px"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery"
          >搜索</el-button
        >
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button type="primary" plain icon="Plus" @click="handleAdd"
          >新增</el-button
        >
      </el-col>
      <right-toolbar
        v-model:showSearch="showSearch"
        @queryTable="getList"
      ></right-toolbar>
    </el-row>

    <el-table
      v-loading="loading"
      :data="dataList"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="ID" width="100" align="center" prop="id" />
      <el-table-column label="号码"  align="center" prop="number" />
      <el-table-column label="加密小号"  align="center" prop="pwNumber" />
      <el-table-column label="批次"  align="center" prop="type" />
      <el-table-column label="入库时间"  align="center" prop="date" />
      <!-- <el-table-column
        label="操作"
        align="center"
        width="200"
        class-name="small-padding fixed-width"
      >
        <template #default="scope">
          <el-tooltip content="预览" placement="top">
            <el-button
              link
              type="primary"
              icon="Edit"
              @click="handleDetail(scope.row)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column> -->
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      v-model:page="queryParams.pageNum"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script setup name="uploadFile">
// import { reactive, toRefs } from "vue";

const { proxy } = getCurrentInstance(); //相当于this 

const dataList = ref([
  {id:1,number:'18162393238',pwNumber:'okdi520',type:'1',date:'2022-12-15 15:47:52'},
  {id:1,number:'18162393238',pwNumber:'okdi520',type:'1',date:'2022-12-15 15:47:52'},
  {id:1,number:'18162393238',pwNumber:'okdi520',type:'1',date:'2022-12-15 15:47:52'},
  {id:1,number:'18162393238',pwNumber:'okdi520',type:'1',date:'2022-12-15 15:47:52'},
  {id:1,number:'18162393238',pwNumber:'okdi520',type:'1',date:'2022-12-15 15:47:52'},
  {id:1,number:'18162393238',pwNumber:'okdi520',type:'1',date:'2022-12-15 15:47:52'},
]);
const showSearch = ref(true);
const loading = ref(false);
const total = ref(1);
const data = reactive({
  from: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    fileName: undefined,
  },
});
const { from, queryParams } = toRefs(data);
function handleQuery() {
  console.log("搜索");
}
function reset() {
  console.log("葱子");
}
function resetQuery() {
  reset();
}
function handleAdd() {
  console.log("新增");
}
function getList() {
  console.log("获取数据");
}
function handleSelectionChange() {
  console.log("全选");
}
function handleDetail(row) {
  console.log(row);
}
getList();
</script>
