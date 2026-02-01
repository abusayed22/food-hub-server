import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model menu
 *
 */
export type menuModel = runtime.Types.Result.DefaultSelection<Prisma.$menuPayload>;
export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null;
    _avg: MenuAvgAggregateOutputType | null;
    _sum: MenuSumAggregateOutputType | null;
    _min: MenuMinAggregateOutputType | null;
    _max: MenuMaxAggregateOutputType | null;
};
export type MenuAvgAggregateOutputType = {
    price: number | null;
};
export type MenuSumAggregateOutputType = {
    price: number | null;
};
export type MenuMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    isAvailable: boolean | null;
    price: number | null;
    description: string | null;
    iamge: string | null;
    category_id: string | null;
    createdAt: Date | null;
    updateAt: Date | null;
};
export type MenuMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    isAvailable: boolean | null;
    price: number | null;
    description: string | null;
    iamge: string | null;
    category_id: string | null;
    createdAt: Date | null;
    updateAt: Date | null;
};
export type MenuCountAggregateOutputType = {
    id: number;
    name: number;
    isAvailable: number;
    price: number;
    description: number;
    iamge: number;
    category_id: number;
    createdAt: number;
    updateAt: number;
    _all: number;
};
export type MenuAvgAggregateInputType = {
    price?: true;
};
export type MenuSumAggregateInputType = {
    price?: true;
};
export type MenuMinAggregateInputType = {
    id?: true;
    name?: true;
    isAvailable?: true;
    price?: true;
    description?: true;
    iamge?: true;
    category_id?: true;
    createdAt?: true;
    updateAt?: true;
};
export type MenuMaxAggregateInputType = {
    id?: true;
    name?: true;
    isAvailable?: true;
    price?: true;
    description?: true;
    iamge?: true;
    category_id?: true;
    createdAt?: true;
    updateAt?: true;
};
export type MenuCountAggregateInputType = {
    id?: true;
    name?: true;
    isAvailable?: true;
    price?: true;
    description?: true;
    iamge?: true;
    category_id?: true;
    createdAt?: true;
    updateAt?: true;
    _all?: true;
};
export type MenuAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which menu to aggregate.
     */
    where?: Prisma.menuWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of menus to fetch.
     */
    orderBy?: Prisma.menuOrderByWithRelationInput | Prisma.menuOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.menuWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` menus from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` menus.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned menus
    **/
    _count?: true | MenuCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType;
};
export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
    [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMenu[P]> : Prisma.GetScalarType<T[P], AggregateMenu[P]>;
};
export type menuGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.menuWhereInput;
    orderBy?: Prisma.menuOrderByWithAggregationInput | Prisma.menuOrderByWithAggregationInput[];
    by: Prisma.MenuScalarFieldEnum[] | Prisma.MenuScalarFieldEnum;
    having?: Prisma.menuScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MenuCountAggregateInputType | true;
    _avg?: MenuAvgAggregateInputType;
    _sum?: MenuSumAggregateInputType;
    _min?: MenuMinAggregateInputType;
    _max?: MenuMaxAggregateInputType;
};
export type MenuGroupByOutputType = {
    id: string;
    name: string;
    isAvailable: boolean;
    price: number;
    description: string | null;
    iamge: string | null;
    category_id: string;
    createdAt: Date;
    updateAt: Date;
    _count: MenuCountAggregateOutputType | null;
    _avg: MenuAvgAggregateOutputType | null;
    _sum: MenuSumAggregateOutputType | null;
    _min: MenuMinAggregateOutputType | null;
    _max: MenuMaxAggregateOutputType | null;
};
type GetMenuGroupByPayload<T extends menuGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MenuGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MenuGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MenuGroupByOutputType[P]>;
}>>;
export type menuWhereInput = {
    AND?: Prisma.menuWhereInput | Prisma.menuWhereInput[];
    OR?: Prisma.menuWhereInput[];
    NOT?: Prisma.menuWhereInput | Prisma.menuWhereInput[];
    id?: Prisma.StringFilter<"menu"> | string;
    name?: Prisma.StringFilter<"menu"> | string;
    isAvailable?: Prisma.BoolFilter<"menu"> | boolean;
    price?: Prisma.FloatFilter<"menu"> | number;
    description?: Prisma.StringNullableFilter<"menu"> | string | null;
    iamge?: Prisma.StringNullableFilter<"menu"> | string | null;
    category_id?: Prisma.StringFilter<"menu"> | string;
    createdAt?: Prisma.DateTimeFilter<"menu"> | Date | string;
    updateAt?: Prisma.DateTimeFilter<"menu"> | Date | string;
    review?: Prisma.ReviewListRelationFilter;
    orderItem?: Prisma.OrderItemListRelationFilter;
    category?: Prisma.XOR<Prisma.CategoriesScalarRelationFilter, Prisma.categoriesWhereInput>;
};
export type menuOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    iamge?: Prisma.SortOrderInput | Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
    review?: Prisma.reviewOrderByRelationAggregateInput;
    orderItem?: Prisma.orderItemOrderByRelationAggregateInput;
    category?: Prisma.categoriesOrderByWithRelationInput;
};
export type menuWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.menuWhereInput | Prisma.menuWhereInput[];
    OR?: Prisma.menuWhereInput[];
    NOT?: Prisma.menuWhereInput | Prisma.menuWhereInput[];
    name?: Prisma.StringFilter<"menu"> | string;
    isAvailable?: Prisma.BoolFilter<"menu"> | boolean;
    price?: Prisma.FloatFilter<"menu"> | number;
    description?: Prisma.StringNullableFilter<"menu"> | string | null;
    iamge?: Prisma.StringNullableFilter<"menu"> | string | null;
    category_id?: Prisma.StringFilter<"menu"> | string;
    createdAt?: Prisma.DateTimeFilter<"menu"> | Date | string;
    updateAt?: Prisma.DateTimeFilter<"menu"> | Date | string;
    review?: Prisma.ReviewListRelationFilter;
    orderItem?: Prisma.OrderItemListRelationFilter;
    category?: Prisma.XOR<Prisma.CategoriesScalarRelationFilter, Prisma.categoriesWhereInput>;
}, "id">;
export type menuOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    iamge?: Prisma.SortOrderInput | Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
    _count?: Prisma.menuCountOrderByAggregateInput;
    _avg?: Prisma.menuAvgOrderByAggregateInput;
    _max?: Prisma.menuMaxOrderByAggregateInput;
    _min?: Prisma.menuMinOrderByAggregateInput;
    _sum?: Prisma.menuSumOrderByAggregateInput;
};
export type menuScalarWhereWithAggregatesInput = {
    AND?: Prisma.menuScalarWhereWithAggregatesInput | Prisma.menuScalarWhereWithAggregatesInput[];
    OR?: Prisma.menuScalarWhereWithAggregatesInput[];
    NOT?: Prisma.menuScalarWhereWithAggregatesInput | Prisma.menuScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"menu"> | string;
    name?: Prisma.StringWithAggregatesFilter<"menu"> | string;
    isAvailable?: Prisma.BoolWithAggregatesFilter<"menu"> | boolean;
    price?: Prisma.FloatWithAggregatesFilter<"menu"> | number;
    description?: Prisma.StringNullableWithAggregatesFilter<"menu"> | string | null;
    iamge?: Prisma.StringNullableWithAggregatesFilter<"menu"> | string | null;
    category_id?: Prisma.StringWithAggregatesFilter<"menu"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"menu"> | Date | string;
    updateAt?: Prisma.DateTimeWithAggregatesFilter<"menu"> | Date | string;
};
export type menuCreateInput = {
    id?: string;
    name: string;
    isAvailable?: boolean;
    price: number;
    description?: string | null;
    iamge?: string | null;
    createdAt?: Date | string;
    updateAt?: Date | string;
    review?: Prisma.reviewCreateNestedManyWithoutMenuInput;
    orderItem?: Prisma.orderItemCreateNestedManyWithoutMenuInput;
    category: Prisma.categoriesCreateNestedOneWithoutMenuInput;
};
export type menuUncheckedCreateInput = {
    id?: string;
    name: string;
    isAvailable?: boolean;
    price: number;
    description?: string | null;
    iamge?: string | null;
    category_id: string;
    createdAt?: Date | string;
    updateAt?: Date | string;
    review?: Prisma.reviewUncheckedCreateNestedManyWithoutMenuInput;
    orderItem?: Prisma.orderItemUncheckedCreateNestedManyWithoutMenuInput;
};
export type menuUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iamge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    review?: Prisma.reviewUpdateManyWithoutMenuNestedInput;
    orderItem?: Prisma.orderItemUpdateManyWithoutMenuNestedInput;
    category?: Prisma.categoriesUpdateOneRequiredWithoutMenuNestedInput;
};
export type menuUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iamge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    review?: Prisma.reviewUncheckedUpdateManyWithoutMenuNestedInput;
    orderItem?: Prisma.orderItemUncheckedUpdateManyWithoutMenuNestedInput;
};
export type menuCreateManyInput = {
    id?: string;
    name: string;
    isAvailable?: boolean;
    price: number;
    description?: string | null;
    iamge?: string | null;
    category_id: string;
    createdAt?: Date | string;
    updateAt?: Date | string;
};
export type menuUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iamge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type menuUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iamge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MenuListRelationFilter = {
    every?: Prisma.menuWhereInput;
    some?: Prisma.menuWhereInput;
    none?: Prisma.menuWhereInput;
};
export type menuOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type menuCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    iamge?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type menuAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type menuMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    iamge?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type menuMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    iamge?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type menuSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type MenuScalarRelationFilter = {
    is?: Prisma.menuWhereInput;
    isNot?: Prisma.menuWhereInput;
};
export type menuCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.menuCreateWithoutCategoryInput, Prisma.menuUncheckedCreateWithoutCategoryInput> | Prisma.menuCreateWithoutCategoryInput[] | Prisma.menuUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.menuCreateOrConnectWithoutCategoryInput | Prisma.menuCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.menuCreateManyCategoryInputEnvelope;
    connect?: Prisma.menuWhereUniqueInput | Prisma.menuWhereUniqueInput[];
};
export type menuUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.menuCreateWithoutCategoryInput, Prisma.menuUncheckedCreateWithoutCategoryInput> | Prisma.menuCreateWithoutCategoryInput[] | Prisma.menuUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.menuCreateOrConnectWithoutCategoryInput | Prisma.menuCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.menuCreateManyCategoryInputEnvelope;
    connect?: Prisma.menuWhereUniqueInput | Prisma.menuWhereUniqueInput[];
};
export type menuUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.menuCreateWithoutCategoryInput, Prisma.menuUncheckedCreateWithoutCategoryInput> | Prisma.menuCreateWithoutCategoryInput[] | Prisma.menuUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.menuCreateOrConnectWithoutCategoryInput | Prisma.menuCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.menuUpsertWithWhereUniqueWithoutCategoryInput | Prisma.menuUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.menuCreateManyCategoryInputEnvelope;
    set?: Prisma.menuWhereUniqueInput | Prisma.menuWhereUniqueInput[];
    disconnect?: Prisma.menuWhereUniqueInput | Prisma.menuWhereUniqueInput[];
    delete?: Prisma.menuWhereUniqueInput | Prisma.menuWhereUniqueInput[];
    connect?: Prisma.menuWhereUniqueInput | Prisma.menuWhereUniqueInput[];
    update?: Prisma.menuUpdateWithWhereUniqueWithoutCategoryInput | Prisma.menuUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.menuUpdateManyWithWhereWithoutCategoryInput | Prisma.menuUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.menuScalarWhereInput | Prisma.menuScalarWhereInput[];
};
export type menuUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.menuCreateWithoutCategoryInput, Prisma.menuUncheckedCreateWithoutCategoryInput> | Prisma.menuCreateWithoutCategoryInput[] | Prisma.menuUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.menuCreateOrConnectWithoutCategoryInput | Prisma.menuCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.menuUpsertWithWhereUniqueWithoutCategoryInput | Prisma.menuUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.menuCreateManyCategoryInputEnvelope;
    set?: Prisma.menuWhereUniqueInput | Prisma.menuWhereUniqueInput[];
    disconnect?: Prisma.menuWhereUniqueInput | Prisma.menuWhereUniqueInput[];
    delete?: Prisma.menuWhereUniqueInput | Prisma.menuWhereUniqueInput[];
    connect?: Prisma.menuWhereUniqueInput | Prisma.menuWhereUniqueInput[];
    update?: Prisma.menuUpdateWithWhereUniqueWithoutCategoryInput | Prisma.menuUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.menuUpdateManyWithWhereWithoutCategoryInput | Prisma.menuUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.menuScalarWhereInput | Prisma.menuScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type menuCreateNestedOneWithoutOrderItemInput = {
    create?: Prisma.XOR<Prisma.menuCreateWithoutOrderItemInput, Prisma.menuUncheckedCreateWithoutOrderItemInput>;
    connectOrCreate?: Prisma.menuCreateOrConnectWithoutOrderItemInput;
    connect?: Prisma.menuWhereUniqueInput;
};
export type menuUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: Prisma.XOR<Prisma.menuCreateWithoutOrderItemInput, Prisma.menuUncheckedCreateWithoutOrderItemInput>;
    connectOrCreate?: Prisma.menuCreateOrConnectWithoutOrderItemInput;
    upsert?: Prisma.menuUpsertWithoutOrderItemInput;
    connect?: Prisma.menuWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.menuUpdateToOneWithWhereWithoutOrderItemInput, Prisma.menuUpdateWithoutOrderItemInput>, Prisma.menuUncheckedUpdateWithoutOrderItemInput>;
};
export type menuCreateNestedOneWithoutReviewInput = {
    create?: Prisma.XOR<Prisma.menuCreateWithoutReviewInput, Prisma.menuUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: Prisma.menuCreateOrConnectWithoutReviewInput;
    connect?: Prisma.menuWhereUniqueInput;
};
export type menuUpdateOneRequiredWithoutReviewNestedInput = {
    create?: Prisma.XOR<Prisma.menuCreateWithoutReviewInput, Prisma.menuUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: Prisma.menuCreateOrConnectWithoutReviewInput;
    upsert?: Prisma.menuUpsertWithoutReviewInput;
    connect?: Prisma.menuWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.menuUpdateToOneWithWhereWithoutReviewInput, Prisma.menuUpdateWithoutReviewInput>, Prisma.menuUncheckedUpdateWithoutReviewInput>;
};
export type menuCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    isAvailable?: boolean;
    price: number;
    description?: string | null;
    iamge?: string | null;
    createdAt?: Date | string;
    updateAt?: Date | string;
    review?: Prisma.reviewCreateNestedManyWithoutMenuInput;
    orderItem?: Prisma.orderItemCreateNestedManyWithoutMenuInput;
};
export type menuUncheckedCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    isAvailable?: boolean;
    price: number;
    description?: string | null;
    iamge?: string | null;
    createdAt?: Date | string;
    updateAt?: Date | string;
    review?: Prisma.reviewUncheckedCreateNestedManyWithoutMenuInput;
    orderItem?: Prisma.orderItemUncheckedCreateNestedManyWithoutMenuInput;
};
export type menuCreateOrConnectWithoutCategoryInput = {
    where: Prisma.menuWhereUniqueInput;
    create: Prisma.XOR<Prisma.menuCreateWithoutCategoryInput, Prisma.menuUncheckedCreateWithoutCategoryInput>;
};
export type menuCreateManyCategoryInputEnvelope = {
    data: Prisma.menuCreateManyCategoryInput | Prisma.menuCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type menuUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.menuWhereUniqueInput;
    update: Prisma.XOR<Prisma.menuUpdateWithoutCategoryInput, Prisma.menuUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.menuCreateWithoutCategoryInput, Prisma.menuUncheckedCreateWithoutCategoryInput>;
};
export type menuUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.menuWhereUniqueInput;
    data: Prisma.XOR<Prisma.menuUpdateWithoutCategoryInput, Prisma.menuUncheckedUpdateWithoutCategoryInput>;
};
export type menuUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.menuScalarWhereInput;
    data: Prisma.XOR<Prisma.menuUpdateManyMutationInput, Prisma.menuUncheckedUpdateManyWithoutCategoryInput>;
};
export type menuScalarWhereInput = {
    AND?: Prisma.menuScalarWhereInput | Prisma.menuScalarWhereInput[];
    OR?: Prisma.menuScalarWhereInput[];
    NOT?: Prisma.menuScalarWhereInput | Prisma.menuScalarWhereInput[];
    id?: Prisma.StringFilter<"menu"> | string;
    name?: Prisma.StringFilter<"menu"> | string;
    isAvailable?: Prisma.BoolFilter<"menu"> | boolean;
    price?: Prisma.FloatFilter<"menu"> | number;
    description?: Prisma.StringNullableFilter<"menu"> | string | null;
    iamge?: Prisma.StringNullableFilter<"menu"> | string | null;
    category_id?: Prisma.StringFilter<"menu"> | string;
    createdAt?: Prisma.DateTimeFilter<"menu"> | Date | string;
    updateAt?: Prisma.DateTimeFilter<"menu"> | Date | string;
};
export type menuCreateWithoutOrderItemInput = {
    id?: string;
    name: string;
    isAvailable?: boolean;
    price: number;
    description?: string | null;
    iamge?: string | null;
    createdAt?: Date | string;
    updateAt?: Date | string;
    review?: Prisma.reviewCreateNestedManyWithoutMenuInput;
    category: Prisma.categoriesCreateNestedOneWithoutMenuInput;
};
export type menuUncheckedCreateWithoutOrderItemInput = {
    id?: string;
    name: string;
    isAvailable?: boolean;
    price: number;
    description?: string | null;
    iamge?: string | null;
    category_id: string;
    createdAt?: Date | string;
    updateAt?: Date | string;
    review?: Prisma.reviewUncheckedCreateNestedManyWithoutMenuInput;
};
export type menuCreateOrConnectWithoutOrderItemInput = {
    where: Prisma.menuWhereUniqueInput;
    create: Prisma.XOR<Prisma.menuCreateWithoutOrderItemInput, Prisma.menuUncheckedCreateWithoutOrderItemInput>;
};
export type menuUpsertWithoutOrderItemInput = {
    update: Prisma.XOR<Prisma.menuUpdateWithoutOrderItemInput, Prisma.menuUncheckedUpdateWithoutOrderItemInput>;
    create: Prisma.XOR<Prisma.menuCreateWithoutOrderItemInput, Prisma.menuUncheckedCreateWithoutOrderItemInput>;
    where?: Prisma.menuWhereInput;
};
export type menuUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: Prisma.menuWhereInput;
    data: Prisma.XOR<Prisma.menuUpdateWithoutOrderItemInput, Prisma.menuUncheckedUpdateWithoutOrderItemInput>;
};
export type menuUpdateWithoutOrderItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iamge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    review?: Prisma.reviewUpdateManyWithoutMenuNestedInput;
    category?: Prisma.categoriesUpdateOneRequiredWithoutMenuNestedInput;
};
export type menuUncheckedUpdateWithoutOrderItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iamge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    review?: Prisma.reviewUncheckedUpdateManyWithoutMenuNestedInput;
};
export type menuCreateWithoutReviewInput = {
    id?: string;
    name: string;
    isAvailable?: boolean;
    price: number;
    description?: string | null;
    iamge?: string | null;
    createdAt?: Date | string;
    updateAt?: Date | string;
    orderItem?: Prisma.orderItemCreateNestedManyWithoutMenuInput;
    category: Prisma.categoriesCreateNestedOneWithoutMenuInput;
};
export type menuUncheckedCreateWithoutReviewInput = {
    id?: string;
    name: string;
    isAvailable?: boolean;
    price: number;
    description?: string | null;
    iamge?: string | null;
    category_id: string;
    createdAt?: Date | string;
    updateAt?: Date | string;
    orderItem?: Prisma.orderItemUncheckedCreateNestedManyWithoutMenuInput;
};
export type menuCreateOrConnectWithoutReviewInput = {
    where: Prisma.menuWhereUniqueInput;
    create: Prisma.XOR<Prisma.menuCreateWithoutReviewInput, Prisma.menuUncheckedCreateWithoutReviewInput>;
};
export type menuUpsertWithoutReviewInput = {
    update: Prisma.XOR<Prisma.menuUpdateWithoutReviewInput, Prisma.menuUncheckedUpdateWithoutReviewInput>;
    create: Prisma.XOR<Prisma.menuCreateWithoutReviewInput, Prisma.menuUncheckedCreateWithoutReviewInput>;
    where?: Prisma.menuWhereInput;
};
export type menuUpdateToOneWithWhereWithoutReviewInput = {
    where?: Prisma.menuWhereInput;
    data: Prisma.XOR<Prisma.menuUpdateWithoutReviewInput, Prisma.menuUncheckedUpdateWithoutReviewInput>;
};
export type menuUpdateWithoutReviewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iamge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItem?: Prisma.orderItemUpdateManyWithoutMenuNestedInput;
    category?: Prisma.categoriesUpdateOneRequiredWithoutMenuNestedInput;
};
export type menuUncheckedUpdateWithoutReviewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iamge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItem?: Prisma.orderItemUncheckedUpdateManyWithoutMenuNestedInput;
};
export type menuCreateManyCategoryInput = {
    id?: string;
    name: string;
    isAvailable?: boolean;
    price: number;
    description?: string | null;
    iamge?: string | null;
    createdAt?: Date | string;
    updateAt?: Date | string;
};
export type menuUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iamge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    review?: Prisma.reviewUpdateManyWithoutMenuNestedInput;
    orderItem?: Prisma.orderItemUpdateManyWithoutMenuNestedInput;
};
export type menuUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iamge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    review?: Prisma.reviewUncheckedUpdateManyWithoutMenuNestedInput;
    orderItem?: Prisma.orderItemUncheckedUpdateManyWithoutMenuNestedInput;
};
export type menuUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iamge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type MenuCountOutputType
 */
export type MenuCountOutputType = {
    review: number;
    orderItem: number;
};
export type MenuCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    review?: boolean | MenuCountOutputTypeCountReviewArgs;
    orderItem?: boolean | MenuCountOutputTypeCountOrderItemArgs;
};
/**
 * MenuCountOutputType without action
 */
export type MenuCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: Prisma.MenuCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MenuCountOutputType without action
 */
export type MenuCountOutputTypeCountReviewArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewWhereInput;
};
/**
 * MenuCountOutputType without action
 */
export type MenuCountOutputTypeCountOrderItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orderItemWhereInput;
};
export type menuSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isAvailable?: boolean;
    price?: boolean;
    description?: boolean;
    iamge?: boolean;
    category_id?: boolean;
    createdAt?: boolean;
    updateAt?: boolean;
    review?: boolean | Prisma.menu$reviewArgs<ExtArgs>;
    orderItem?: boolean | Prisma.menu$orderItemArgs<ExtArgs>;
    category?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.MenuCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menu"]>;
export type menuSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isAvailable?: boolean;
    price?: boolean;
    description?: boolean;
    iamge?: boolean;
    category_id?: boolean;
    createdAt?: boolean;
    updateAt?: boolean;
    category?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menu"]>;
export type menuSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isAvailable?: boolean;
    price?: boolean;
    description?: boolean;
    iamge?: boolean;
    category_id?: boolean;
    createdAt?: boolean;
    updateAt?: boolean;
    category?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menu"]>;
export type menuSelectScalar = {
    id?: boolean;
    name?: boolean;
    isAvailable?: boolean;
    price?: boolean;
    description?: boolean;
    iamge?: boolean;
    category_id?: boolean;
    createdAt?: boolean;
    updateAt?: boolean;
};
export type menuOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "isAvailable" | "price" | "description" | "iamge" | "category_id" | "createdAt" | "updateAt", ExtArgs["result"]["menu"]>;
export type menuInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    review?: boolean | Prisma.menu$reviewArgs<ExtArgs>;
    orderItem?: boolean | Prisma.menu$orderItemArgs<ExtArgs>;
    category?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.MenuCountOutputTypeDefaultArgs<ExtArgs>;
};
export type menuIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
};
export type menuIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
};
export type $menuPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "menu";
    objects: {
        review: Prisma.$reviewPayload<ExtArgs>[];
        orderItem: Prisma.$orderItemPayload<ExtArgs>[];
        category: Prisma.$categoriesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        isAvailable: boolean;
        price: number;
        description: string | null;
        iamge: string | null;
        category_id: string;
        createdAt: Date;
        updateAt: Date;
    }, ExtArgs["result"]["menu"]>;
    composites: {};
};
export type menuGetPayload<S extends boolean | null | undefined | menuDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$menuPayload, S>;
export type menuCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MenuCountAggregateInputType | true;
};
export interface menuDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['menu'];
        meta: {
            name: 'menu';
        };
    };
    /**
     * Find zero or one Menu that matches the filter.
     * @param {menuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menuFindUniqueArgs>(args: Prisma.SelectSubset<T, menuFindUniqueArgs<ExtArgs>>): Prisma.Prisma__menuClient<runtime.Types.Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menuFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__menuClient<runtime.Types.Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menuFindFirstArgs>(args?: Prisma.SelectSubset<T, menuFindFirstArgs<ExtArgs>>): Prisma.Prisma__menuClient<runtime.Types.Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menuFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, menuFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__menuClient<runtime.Types.Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     *
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     *
     */
    findMany<T extends menuFindManyArgs>(args?: Prisma.SelectSubset<T, menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Menu.
     * @param {menuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     *
     */
    create<T extends menuCreateArgs>(args: Prisma.SelectSubset<T, menuCreateArgs<ExtArgs>>): Prisma.Prisma__menuClient<runtime.Types.Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Menus.
     * @param {menuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends menuCreateManyArgs>(args?: Prisma.SelectSubset<T, menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Menus and returns the data saved in the database.
     * @param {menuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends menuCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, menuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Menu.
     * @param {menuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     *
     */
    delete<T extends menuDeleteArgs>(args: Prisma.SelectSubset<T, menuDeleteArgs<ExtArgs>>): Prisma.Prisma__menuClient<runtime.Types.Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Menu.
     * @param {menuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends menuUpdateArgs>(args: Prisma.SelectSubset<T, menuUpdateArgs<ExtArgs>>): Prisma.Prisma__menuClient<runtime.Types.Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Menus.
     * @param {menuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends menuDeleteManyArgs>(args?: Prisma.SelectSubset<T, menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends menuUpdateManyArgs>(args: Prisma.SelectSubset<T, menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Menus and returns the data updated in the database.
     * @param {menuUpdateManyAndReturnArgs} args - Arguments to update many Menus.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends menuUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, menuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Menu.
     * @param {menuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends menuUpsertArgs>(args: Prisma.SelectSubset<T, menuUpsertArgs<ExtArgs>>): Prisma.Prisma__menuClient<runtime.Types.Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends menuCountArgs>(args?: Prisma.Subset<T, menuCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MenuCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Prisma.Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>;
    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends menuGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: menuGroupByArgs['orderBy'];
    } : {
        orderBy?: menuGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the menu model
     */
    readonly fields: menuFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for menu.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__menuClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    review<T extends Prisma.menu$reviewArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.menu$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderItem<T extends Prisma.menu$orderItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.menu$orderItemArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    category<T extends Prisma.categoriesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categoriesDefaultArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the menu model
 */
export interface menuFieldRefs {
    readonly id: Prisma.FieldRef<"menu", 'String'>;
    readonly name: Prisma.FieldRef<"menu", 'String'>;
    readonly isAvailable: Prisma.FieldRef<"menu", 'Boolean'>;
    readonly price: Prisma.FieldRef<"menu", 'Float'>;
    readonly description: Prisma.FieldRef<"menu", 'String'>;
    readonly iamge: Prisma.FieldRef<"menu", 'String'>;
    readonly category_id: Prisma.FieldRef<"menu", 'String'>;
    readonly createdAt: Prisma.FieldRef<"menu", 'DateTime'>;
    readonly updateAt: Prisma.FieldRef<"menu", 'DateTime'>;
}
/**
 * menu findUnique
 */
export type menuFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: Prisma.menuSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the menu
     */
    omit?: Prisma.menuOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.menuInclude<ExtArgs> | null;
    /**
     * Filter, which menu to fetch.
     */
    where: Prisma.menuWhereUniqueInput;
};
/**
 * menu findUniqueOrThrow
 */
export type menuFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: Prisma.menuSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the menu
     */
    omit?: Prisma.menuOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.menuInclude<ExtArgs> | null;
    /**
     * Filter, which menu to fetch.
     */
    where: Prisma.menuWhereUniqueInput;
};
/**
 * menu findFirst
 */
export type menuFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: Prisma.menuSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the menu
     */
    omit?: Prisma.menuOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.menuInclude<ExtArgs> | null;
    /**
     * Filter, which menu to fetch.
     */
    where?: Prisma.menuWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of menus to fetch.
     */
    orderBy?: Prisma.menuOrderByWithRelationInput | Prisma.menuOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for menus.
     */
    cursor?: Prisma.menuWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` menus from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` menus.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of menus.
     */
    distinct?: Prisma.MenuScalarFieldEnum | Prisma.MenuScalarFieldEnum[];
};
/**
 * menu findFirstOrThrow
 */
export type menuFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: Prisma.menuSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the menu
     */
    omit?: Prisma.menuOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.menuInclude<ExtArgs> | null;
    /**
     * Filter, which menu to fetch.
     */
    where?: Prisma.menuWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of menus to fetch.
     */
    orderBy?: Prisma.menuOrderByWithRelationInput | Prisma.menuOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for menus.
     */
    cursor?: Prisma.menuWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` menus from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` menus.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of menus.
     */
    distinct?: Prisma.MenuScalarFieldEnum | Prisma.MenuScalarFieldEnum[];
};
/**
 * menu findMany
 */
export type menuFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: Prisma.menuSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the menu
     */
    omit?: Prisma.menuOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.menuInclude<ExtArgs> | null;
    /**
     * Filter, which menus to fetch.
     */
    where?: Prisma.menuWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of menus to fetch.
     */
    orderBy?: Prisma.menuOrderByWithRelationInput | Prisma.menuOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing menus.
     */
    cursor?: Prisma.menuWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` menus from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` menus.
     */
    skip?: number;
    distinct?: Prisma.MenuScalarFieldEnum | Prisma.MenuScalarFieldEnum[];
};
/**
 * menu create
 */
export type menuCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: Prisma.menuSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the menu
     */
    omit?: Prisma.menuOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.menuInclude<ExtArgs> | null;
    /**
     * The data needed to create a menu.
     */
    data: Prisma.XOR<Prisma.menuCreateInput, Prisma.menuUncheckedCreateInput>;
};
/**
 * menu createMany
 */
export type menuCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many menus.
     */
    data: Prisma.menuCreateManyInput | Prisma.menuCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * menu createManyAndReturn
 */
export type menuCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: Prisma.menuSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the menu
     */
    omit?: Prisma.menuOmit<ExtArgs> | null;
    /**
     * The data used to create many menus.
     */
    data: Prisma.menuCreateManyInput | Prisma.menuCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.menuIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * menu update
 */
export type menuUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: Prisma.menuSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the menu
     */
    omit?: Prisma.menuOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.menuInclude<ExtArgs> | null;
    /**
     * The data needed to update a menu.
     */
    data: Prisma.XOR<Prisma.menuUpdateInput, Prisma.menuUncheckedUpdateInput>;
    /**
     * Choose, which menu to update.
     */
    where: Prisma.menuWhereUniqueInput;
};
/**
 * menu updateMany
 */
export type menuUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update menus.
     */
    data: Prisma.XOR<Prisma.menuUpdateManyMutationInput, Prisma.menuUncheckedUpdateManyInput>;
    /**
     * Filter which menus to update
     */
    where?: Prisma.menuWhereInput;
    /**
     * Limit how many menus to update.
     */
    limit?: number;
};
/**
 * menu updateManyAndReturn
 */
export type menuUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: Prisma.menuSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the menu
     */
    omit?: Prisma.menuOmit<ExtArgs> | null;
    /**
     * The data used to update menus.
     */
    data: Prisma.XOR<Prisma.menuUpdateManyMutationInput, Prisma.menuUncheckedUpdateManyInput>;
    /**
     * Filter which menus to update
     */
    where?: Prisma.menuWhereInput;
    /**
     * Limit how many menus to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.menuIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * menu upsert
 */
export type menuUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: Prisma.menuSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the menu
     */
    omit?: Prisma.menuOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.menuInclude<ExtArgs> | null;
    /**
     * The filter to search for the menu to update in case it exists.
     */
    where: Prisma.menuWhereUniqueInput;
    /**
     * In case the menu found by the `where` argument doesn't exist, create a new menu with this data.
     */
    create: Prisma.XOR<Prisma.menuCreateInput, Prisma.menuUncheckedCreateInput>;
    /**
     * In case the menu was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.menuUpdateInput, Prisma.menuUncheckedUpdateInput>;
};
/**
 * menu delete
 */
export type menuDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: Prisma.menuSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the menu
     */
    omit?: Prisma.menuOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.menuInclude<ExtArgs> | null;
    /**
     * Filter which menu to delete.
     */
    where: Prisma.menuWhereUniqueInput;
};
/**
 * menu deleteMany
 */
export type menuDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which menus to delete
     */
    where?: Prisma.menuWhereInput;
    /**
     * Limit how many menus to delete.
     */
    limit?: number;
};
/**
 * menu.review
 */
export type menu$reviewArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: Prisma.reviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the review
     */
    omit?: Prisma.reviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.reviewInclude<ExtArgs> | null;
    where?: Prisma.reviewWhereInput;
    orderBy?: Prisma.reviewOrderByWithRelationInput | Prisma.reviewOrderByWithRelationInput[];
    cursor?: Prisma.reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
/**
 * menu.orderItem
 */
export type menu$orderItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: Prisma.orderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the orderItem
     */
    omit?: Prisma.orderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.orderItemInclude<ExtArgs> | null;
    where?: Prisma.orderItemWhereInput;
    orderBy?: Prisma.orderItemOrderByWithRelationInput | Prisma.orderItemOrderByWithRelationInput[];
    cursor?: Prisma.orderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
/**
 * menu without action
 */
export type menuDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: Prisma.menuSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the menu
     */
    omit?: Prisma.menuOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.menuInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=menu.d.ts.map