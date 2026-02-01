import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model review
 *
 */
export type reviewModel = runtime.Types.Result.DefaultSelection<Prisma.$reviewPayload>;
export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
};
export type ReviewMinAggregateOutputType = {
    id: string | null;
    comment: string | null;
    parent_id: string | null;
    menu_id: string | null;
    createdAt: Date | null;
    updateAt: Date | null;
};
export type ReviewMaxAggregateOutputType = {
    id: string | null;
    comment: string | null;
    parent_id: string | null;
    menu_id: string | null;
    createdAt: Date | null;
    updateAt: Date | null;
};
export type ReviewCountAggregateOutputType = {
    id: number;
    comment: number;
    parent_id: number;
    menu_id: number;
    createdAt: number;
    updateAt: number;
    _all: number;
};
export type ReviewMinAggregateInputType = {
    id?: true;
    comment?: true;
    parent_id?: true;
    menu_id?: true;
    createdAt?: true;
    updateAt?: true;
};
export type ReviewMaxAggregateInputType = {
    id?: true;
    comment?: true;
    parent_id?: true;
    menu_id?: true;
    createdAt?: true;
    updateAt?: true;
};
export type ReviewCountAggregateInputType = {
    id?: true;
    comment?: true;
    parent_id?: true;
    menu_id?: true;
    createdAt?: true;
    updateAt?: true;
    _all?: true;
};
export type ReviewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: Prisma.reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: Prisma.reviewOrderByWithRelationInput | Prisma.reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType;
};
export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReview[P]> : Prisma.GetScalarType<T[P], AggregateReview[P]>;
};
export type reviewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewWhereInput;
    orderBy?: Prisma.reviewOrderByWithAggregationInput | Prisma.reviewOrderByWithAggregationInput[];
    by: Prisma.ReviewScalarFieldEnum[] | Prisma.ReviewScalarFieldEnum;
    having?: Prisma.reviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
};
export type ReviewGroupByOutputType = {
    id: string;
    comment: string | null;
    parent_id: string | null;
    menu_id: string;
    createdAt: Date;
    updateAt: Date;
    _count: ReviewCountAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
};
type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReviewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReviewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReviewGroupByOutputType[P]>;
}>>;
export type reviewWhereInput = {
    AND?: Prisma.reviewWhereInput | Prisma.reviewWhereInput[];
    OR?: Prisma.reviewWhereInput[];
    NOT?: Prisma.reviewWhereInput | Prisma.reviewWhereInput[];
    id?: Prisma.StringFilter<"review"> | string;
    comment?: Prisma.StringNullableFilter<"review"> | string | null;
    parent_id?: Prisma.StringNullableFilter<"review"> | string | null;
    menu_id?: Prisma.StringFilter<"review"> | string;
    createdAt?: Prisma.DateTimeFilter<"review"> | Date | string;
    updateAt?: Prisma.DateTimeFilter<"review"> | Date | string;
    related_comment?: Prisma.XOR<Prisma.ReviewNullableScalarRelationFilter, Prisma.reviewWhereInput> | null;
    replies?: Prisma.ReviewListRelationFilter;
    menu?: Prisma.XOR<Prisma.MenuScalarRelationFilter, Prisma.menuWhereInput>;
};
export type reviewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    parent_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    menu_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
    related_comment?: Prisma.reviewOrderByWithRelationInput;
    replies?: Prisma.reviewOrderByRelationAggregateInput;
    menu?: Prisma.menuOrderByWithRelationInput;
};
export type reviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.reviewWhereInput | Prisma.reviewWhereInput[];
    OR?: Prisma.reviewWhereInput[];
    NOT?: Prisma.reviewWhereInput | Prisma.reviewWhereInput[];
    comment?: Prisma.StringNullableFilter<"review"> | string | null;
    parent_id?: Prisma.StringNullableFilter<"review"> | string | null;
    menu_id?: Prisma.StringFilter<"review"> | string;
    createdAt?: Prisma.DateTimeFilter<"review"> | Date | string;
    updateAt?: Prisma.DateTimeFilter<"review"> | Date | string;
    related_comment?: Prisma.XOR<Prisma.ReviewNullableScalarRelationFilter, Prisma.reviewWhereInput> | null;
    replies?: Prisma.ReviewListRelationFilter;
    menu?: Prisma.XOR<Prisma.MenuScalarRelationFilter, Prisma.menuWhereInput>;
}, "id">;
export type reviewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    parent_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    menu_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
    _count?: Prisma.reviewCountOrderByAggregateInput;
    _max?: Prisma.reviewMaxOrderByAggregateInput;
    _min?: Prisma.reviewMinOrderByAggregateInput;
};
export type reviewScalarWhereWithAggregatesInput = {
    AND?: Prisma.reviewScalarWhereWithAggregatesInput | Prisma.reviewScalarWhereWithAggregatesInput[];
    OR?: Prisma.reviewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.reviewScalarWhereWithAggregatesInput | Prisma.reviewScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"review"> | string;
    comment?: Prisma.StringNullableWithAggregatesFilter<"review"> | string | null;
    parent_id?: Prisma.StringNullableWithAggregatesFilter<"review"> | string | null;
    menu_id?: Prisma.StringWithAggregatesFilter<"review"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"review"> | Date | string;
    updateAt?: Prisma.DateTimeWithAggregatesFilter<"review"> | Date | string;
};
export type reviewCreateInput = {
    id?: string;
    comment?: string | null;
    createdAt?: Date | string;
    updateAt?: Date | string;
    related_comment?: Prisma.reviewCreateNestedOneWithoutRepliesInput;
    replies?: Prisma.reviewCreateNestedManyWithoutRelated_commentInput;
    menu: Prisma.menuCreateNestedOneWithoutReviewInput;
};
export type reviewUncheckedCreateInput = {
    id?: string;
    comment?: string | null;
    parent_id?: string | null;
    menu_id: string;
    createdAt?: Date | string;
    updateAt?: Date | string;
    replies?: Prisma.reviewUncheckedCreateNestedManyWithoutRelated_commentInput;
};
export type reviewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    related_comment?: Prisma.reviewUpdateOneWithoutRepliesNestedInput;
    replies?: Prisma.reviewUpdateManyWithoutRelated_commentNestedInput;
    menu?: Prisma.menuUpdateOneRequiredWithoutReviewNestedInput;
};
export type reviewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    menu_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replies?: Prisma.reviewUncheckedUpdateManyWithoutRelated_commentNestedInput;
};
export type reviewCreateManyInput = {
    id?: string;
    comment?: string | null;
    parent_id?: string | null;
    menu_id: string;
    createdAt?: Date | string;
    updateAt?: Date | string;
};
export type reviewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type reviewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    menu_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewListRelationFilter = {
    every?: Prisma.reviewWhereInput;
    some?: Prisma.reviewWhereInput;
    none?: Prisma.reviewWhereInput;
};
export type reviewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReviewNullableScalarRelationFilter = {
    is?: Prisma.reviewWhereInput | null;
    isNot?: Prisma.reviewWhereInput | null;
};
export type reviewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    menu_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type reviewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    menu_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type reviewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    menu_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type reviewCreateNestedManyWithoutMenuInput = {
    create?: Prisma.XOR<Prisma.reviewCreateWithoutMenuInput, Prisma.reviewUncheckedCreateWithoutMenuInput> | Prisma.reviewCreateWithoutMenuInput[] | Prisma.reviewUncheckedCreateWithoutMenuInput[];
    connectOrCreate?: Prisma.reviewCreateOrConnectWithoutMenuInput | Prisma.reviewCreateOrConnectWithoutMenuInput[];
    createMany?: Prisma.reviewCreateManyMenuInputEnvelope;
    connect?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
};
export type reviewUncheckedCreateNestedManyWithoutMenuInput = {
    create?: Prisma.XOR<Prisma.reviewCreateWithoutMenuInput, Prisma.reviewUncheckedCreateWithoutMenuInput> | Prisma.reviewCreateWithoutMenuInput[] | Prisma.reviewUncheckedCreateWithoutMenuInput[];
    connectOrCreate?: Prisma.reviewCreateOrConnectWithoutMenuInput | Prisma.reviewCreateOrConnectWithoutMenuInput[];
    createMany?: Prisma.reviewCreateManyMenuInputEnvelope;
    connect?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
};
export type reviewUpdateManyWithoutMenuNestedInput = {
    create?: Prisma.XOR<Prisma.reviewCreateWithoutMenuInput, Prisma.reviewUncheckedCreateWithoutMenuInput> | Prisma.reviewCreateWithoutMenuInput[] | Prisma.reviewUncheckedCreateWithoutMenuInput[];
    connectOrCreate?: Prisma.reviewCreateOrConnectWithoutMenuInput | Prisma.reviewCreateOrConnectWithoutMenuInput[];
    upsert?: Prisma.reviewUpsertWithWhereUniqueWithoutMenuInput | Prisma.reviewUpsertWithWhereUniqueWithoutMenuInput[];
    createMany?: Prisma.reviewCreateManyMenuInputEnvelope;
    set?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    disconnect?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    delete?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    connect?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    update?: Prisma.reviewUpdateWithWhereUniqueWithoutMenuInput | Prisma.reviewUpdateWithWhereUniqueWithoutMenuInput[];
    updateMany?: Prisma.reviewUpdateManyWithWhereWithoutMenuInput | Prisma.reviewUpdateManyWithWhereWithoutMenuInput[];
    deleteMany?: Prisma.reviewScalarWhereInput | Prisma.reviewScalarWhereInput[];
};
export type reviewUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: Prisma.XOR<Prisma.reviewCreateWithoutMenuInput, Prisma.reviewUncheckedCreateWithoutMenuInput> | Prisma.reviewCreateWithoutMenuInput[] | Prisma.reviewUncheckedCreateWithoutMenuInput[];
    connectOrCreate?: Prisma.reviewCreateOrConnectWithoutMenuInput | Prisma.reviewCreateOrConnectWithoutMenuInput[];
    upsert?: Prisma.reviewUpsertWithWhereUniqueWithoutMenuInput | Prisma.reviewUpsertWithWhereUniqueWithoutMenuInput[];
    createMany?: Prisma.reviewCreateManyMenuInputEnvelope;
    set?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    disconnect?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    delete?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    connect?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    update?: Prisma.reviewUpdateWithWhereUniqueWithoutMenuInput | Prisma.reviewUpdateWithWhereUniqueWithoutMenuInput[];
    updateMany?: Prisma.reviewUpdateManyWithWhereWithoutMenuInput | Prisma.reviewUpdateManyWithWhereWithoutMenuInput[];
    deleteMany?: Prisma.reviewScalarWhereInput | Prisma.reviewScalarWhereInput[];
};
export type reviewCreateNestedOneWithoutRepliesInput = {
    create?: Prisma.XOR<Prisma.reviewCreateWithoutRepliesInput, Prisma.reviewUncheckedCreateWithoutRepliesInput>;
    connectOrCreate?: Prisma.reviewCreateOrConnectWithoutRepliesInput;
    connect?: Prisma.reviewWhereUniqueInput;
};
export type reviewCreateNestedManyWithoutRelated_commentInput = {
    create?: Prisma.XOR<Prisma.reviewCreateWithoutRelated_commentInput, Prisma.reviewUncheckedCreateWithoutRelated_commentInput> | Prisma.reviewCreateWithoutRelated_commentInput[] | Prisma.reviewUncheckedCreateWithoutRelated_commentInput[];
    connectOrCreate?: Prisma.reviewCreateOrConnectWithoutRelated_commentInput | Prisma.reviewCreateOrConnectWithoutRelated_commentInput[];
    createMany?: Prisma.reviewCreateManyRelated_commentInputEnvelope;
    connect?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
};
export type reviewUncheckedCreateNestedManyWithoutRelated_commentInput = {
    create?: Prisma.XOR<Prisma.reviewCreateWithoutRelated_commentInput, Prisma.reviewUncheckedCreateWithoutRelated_commentInput> | Prisma.reviewCreateWithoutRelated_commentInput[] | Prisma.reviewUncheckedCreateWithoutRelated_commentInput[];
    connectOrCreate?: Prisma.reviewCreateOrConnectWithoutRelated_commentInput | Prisma.reviewCreateOrConnectWithoutRelated_commentInput[];
    createMany?: Prisma.reviewCreateManyRelated_commentInputEnvelope;
    connect?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
};
export type reviewUpdateOneWithoutRepliesNestedInput = {
    create?: Prisma.XOR<Prisma.reviewCreateWithoutRepliesInput, Prisma.reviewUncheckedCreateWithoutRepliesInput>;
    connectOrCreate?: Prisma.reviewCreateOrConnectWithoutRepliesInput;
    upsert?: Prisma.reviewUpsertWithoutRepliesInput;
    disconnect?: Prisma.reviewWhereInput | boolean;
    delete?: Prisma.reviewWhereInput | boolean;
    connect?: Prisma.reviewWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.reviewUpdateToOneWithWhereWithoutRepliesInput, Prisma.reviewUpdateWithoutRepliesInput>, Prisma.reviewUncheckedUpdateWithoutRepliesInput>;
};
export type reviewUpdateManyWithoutRelated_commentNestedInput = {
    create?: Prisma.XOR<Prisma.reviewCreateWithoutRelated_commentInput, Prisma.reviewUncheckedCreateWithoutRelated_commentInput> | Prisma.reviewCreateWithoutRelated_commentInput[] | Prisma.reviewUncheckedCreateWithoutRelated_commentInput[];
    connectOrCreate?: Prisma.reviewCreateOrConnectWithoutRelated_commentInput | Prisma.reviewCreateOrConnectWithoutRelated_commentInput[];
    upsert?: Prisma.reviewUpsertWithWhereUniqueWithoutRelated_commentInput | Prisma.reviewUpsertWithWhereUniqueWithoutRelated_commentInput[];
    createMany?: Prisma.reviewCreateManyRelated_commentInputEnvelope;
    set?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    disconnect?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    delete?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    connect?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    update?: Prisma.reviewUpdateWithWhereUniqueWithoutRelated_commentInput | Prisma.reviewUpdateWithWhereUniqueWithoutRelated_commentInput[];
    updateMany?: Prisma.reviewUpdateManyWithWhereWithoutRelated_commentInput | Prisma.reviewUpdateManyWithWhereWithoutRelated_commentInput[];
    deleteMany?: Prisma.reviewScalarWhereInput | Prisma.reviewScalarWhereInput[];
};
export type reviewUncheckedUpdateManyWithoutRelated_commentNestedInput = {
    create?: Prisma.XOR<Prisma.reviewCreateWithoutRelated_commentInput, Prisma.reviewUncheckedCreateWithoutRelated_commentInput> | Prisma.reviewCreateWithoutRelated_commentInput[] | Prisma.reviewUncheckedCreateWithoutRelated_commentInput[];
    connectOrCreate?: Prisma.reviewCreateOrConnectWithoutRelated_commentInput | Prisma.reviewCreateOrConnectWithoutRelated_commentInput[];
    upsert?: Prisma.reviewUpsertWithWhereUniqueWithoutRelated_commentInput | Prisma.reviewUpsertWithWhereUniqueWithoutRelated_commentInput[];
    createMany?: Prisma.reviewCreateManyRelated_commentInputEnvelope;
    set?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    disconnect?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    delete?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    connect?: Prisma.reviewWhereUniqueInput | Prisma.reviewWhereUniqueInput[];
    update?: Prisma.reviewUpdateWithWhereUniqueWithoutRelated_commentInput | Prisma.reviewUpdateWithWhereUniqueWithoutRelated_commentInput[];
    updateMany?: Prisma.reviewUpdateManyWithWhereWithoutRelated_commentInput | Prisma.reviewUpdateManyWithWhereWithoutRelated_commentInput[];
    deleteMany?: Prisma.reviewScalarWhereInput | Prisma.reviewScalarWhereInput[];
};
export type reviewCreateWithoutMenuInput = {
    id?: string;
    comment?: string | null;
    createdAt?: Date | string;
    updateAt?: Date | string;
    related_comment?: Prisma.reviewCreateNestedOneWithoutRepliesInput;
    replies?: Prisma.reviewCreateNestedManyWithoutRelated_commentInput;
};
export type reviewUncheckedCreateWithoutMenuInput = {
    id?: string;
    comment?: string | null;
    parent_id?: string | null;
    createdAt?: Date | string;
    updateAt?: Date | string;
    replies?: Prisma.reviewUncheckedCreateNestedManyWithoutRelated_commentInput;
};
export type reviewCreateOrConnectWithoutMenuInput = {
    where: Prisma.reviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.reviewCreateWithoutMenuInput, Prisma.reviewUncheckedCreateWithoutMenuInput>;
};
export type reviewCreateManyMenuInputEnvelope = {
    data: Prisma.reviewCreateManyMenuInput | Prisma.reviewCreateManyMenuInput[];
    skipDuplicates?: boolean;
};
export type reviewUpsertWithWhereUniqueWithoutMenuInput = {
    where: Prisma.reviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.reviewUpdateWithoutMenuInput, Prisma.reviewUncheckedUpdateWithoutMenuInput>;
    create: Prisma.XOR<Prisma.reviewCreateWithoutMenuInput, Prisma.reviewUncheckedCreateWithoutMenuInput>;
};
export type reviewUpdateWithWhereUniqueWithoutMenuInput = {
    where: Prisma.reviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.reviewUpdateWithoutMenuInput, Prisma.reviewUncheckedUpdateWithoutMenuInput>;
};
export type reviewUpdateManyWithWhereWithoutMenuInput = {
    where: Prisma.reviewScalarWhereInput;
    data: Prisma.XOR<Prisma.reviewUpdateManyMutationInput, Prisma.reviewUncheckedUpdateManyWithoutMenuInput>;
};
export type reviewScalarWhereInput = {
    AND?: Prisma.reviewScalarWhereInput | Prisma.reviewScalarWhereInput[];
    OR?: Prisma.reviewScalarWhereInput[];
    NOT?: Prisma.reviewScalarWhereInput | Prisma.reviewScalarWhereInput[];
    id?: Prisma.StringFilter<"review"> | string;
    comment?: Prisma.StringNullableFilter<"review"> | string | null;
    parent_id?: Prisma.StringNullableFilter<"review"> | string | null;
    menu_id?: Prisma.StringFilter<"review"> | string;
    createdAt?: Prisma.DateTimeFilter<"review"> | Date | string;
    updateAt?: Prisma.DateTimeFilter<"review"> | Date | string;
};
export type reviewCreateWithoutRepliesInput = {
    id?: string;
    comment?: string | null;
    createdAt?: Date | string;
    updateAt?: Date | string;
    related_comment?: Prisma.reviewCreateNestedOneWithoutRepliesInput;
    menu: Prisma.menuCreateNestedOneWithoutReviewInput;
};
export type reviewUncheckedCreateWithoutRepliesInput = {
    id?: string;
    comment?: string | null;
    parent_id?: string | null;
    menu_id: string;
    createdAt?: Date | string;
    updateAt?: Date | string;
};
export type reviewCreateOrConnectWithoutRepliesInput = {
    where: Prisma.reviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.reviewCreateWithoutRepliesInput, Prisma.reviewUncheckedCreateWithoutRepliesInput>;
};
export type reviewCreateWithoutRelated_commentInput = {
    id?: string;
    comment?: string | null;
    createdAt?: Date | string;
    updateAt?: Date | string;
    replies?: Prisma.reviewCreateNestedManyWithoutRelated_commentInput;
    menu: Prisma.menuCreateNestedOneWithoutReviewInput;
};
export type reviewUncheckedCreateWithoutRelated_commentInput = {
    id?: string;
    comment?: string | null;
    menu_id: string;
    createdAt?: Date | string;
    updateAt?: Date | string;
    replies?: Prisma.reviewUncheckedCreateNestedManyWithoutRelated_commentInput;
};
export type reviewCreateOrConnectWithoutRelated_commentInput = {
    where: Prisma.reviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.reviewCreateWithoutRelated_commentInput, Prisma.reviewUncheckedCreateWithoutRelated_commentInput>;
};
export type reviewCreateManyRelated_commentInputEnvelope = {
    data: Prisma.reviewCreateManyRelated_commentInput | Prisma.reviewCreateManyRelated_commentInput[];
    skipDuplicates?: boolean;
};
export type reviewUpsertWithoutRepliesInput = {
    update: Prisma.XOR<Prisma.reviewUpdateWithoutRepliesInput, Prisma.reviewUncheckedUpdateWithoutRepliesInput>;
    create: Prisma.XOR<Prisma.reviewCreateWithoutRepliesInput, Prisma.reviewUncheckedCreateWithoutRepliesInput>;
    where?: Prisma.reviewWhereInput;
};
export type reviewUpdateToOneWithWhereWithoutRepliesInput = {
    where?: Prisma.reviewWhereInput;
    data: Prisma.XOR<Prisma.reviewUpdateWithoutRepliesInput, Prisma.reviewUncheckedUpdateWithoutRepliesInput>;
};
export type reviewUpdateWithoutRepliesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    related_comment?: Prisma.reviewUpdateOneWithoutRepliesNestedInput;
    menu?: Prisma.menuUpdateOneRequiredWithoutReviewNestedInput;
};
export type reviewUncheckedUpdateWithoutRepliesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    menu_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type reviewUpsertWithWhereUniqueWithoutRelated_commentInput = {
    where: Prisma.reviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.reviewUpdateWithoutRelated_commentInput, Prisma.reviewUncheckedUpdateWithoutRelated_commentInput>;
    create: Prisma.XOR<Prisma.reviewCreateWithoutRelated_commentInput, Prisma.reviewUncheckedCreateWithoutRelated_commentInput>;
};
export type reviewUpdateWithWhereUniqueWithoutRelated_commentInput = {
    where: Prisma.reviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.reviewUpdateWithoutRelated_commentInput, Prisma.reviewUncheckedUpdateWithoutRelated_commentInput>;
};
export type reviewUpdateManyWithWhereWithoutRelated_commentInput = {
    where: Prisma.reviewScalarWhereInput;
    data: Prisma.XOR<Prisma.reviewUpdateManyMutationInput, Prisma.reviewUncheckedUpdateManyWithoutRelated_commentInput>;
};
export type reviewCreateManyMenuInput = {
    id?: string;
    comment?: string | null;
    parent_id?: string | null;
    createdAt?: Date | string;
    updateAt?: Date | string;
};
export type reviewUpdateWithoutMenuInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    related_comment?: Prisma.reviewUpdateOneWithoutRepliesNestedInput;
    replies?: Prisma.reviewUpdateManyWithoutRelated_commentNestedInput;
};
export type reviewUncheckedUpdateWithoutMenuInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replies?: Prisma.reviewUncheckedUpdateManyWithoutRelated_commentNestedInput;
};
export type reviewUncheckedUpdateManyWithoutMenuInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type reviewCreateManyRelated_commentInput = {
    id?: string;
    comment?: string | null;
    menu_id: string;
    createdAt?: Date | string;
    updateAt?: Date | string;
};
export type reviewUpdateWithoutRelated_commentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replies?: Prisma.reviewUpdateManyWithoutRelated_commentNestedInput;
    menu?: Prisma.menuUpdateOneRequiredWithoutReviewNestedInput;
};
export type reviewUncheckedUpdateWithoutRelated_commentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    menu_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replies?: Prisma.reviewUncheckedUpdateManyWithoutRelated_commentNestedInput;
};
export type reviewUncheckedUpdateManyWithoutRelated_commentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    menu_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ReviewCountOutputType
 */
export type ReviewCountOutputType = {
    replies: number;
};
export type ReviewCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    replies?: boolean | ReviewCountOutputTypeCountRepliesArgs;
};
/**
 * ReviewCountOutputType without action
 */
export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: Prisma.ReviewCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ReviewCountOutputType without action
 */
export type ReviewCountOutputTypeCountRepliesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewWhereInput;
};
export type reviewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    comment?: boolean;
    parent_id?: boolean;
    menu_id?: boolean;
    createdAt?: boolean;
    updateAt?: boolean;
    related_comment?: boolean | Prisma.review$related_commentArgs<ExtArgs>;
    replies?: boolean | Prisma.review$repliesArgs<ExtArgs>;
    menu?: boolean | Prisma.menuDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ReviewCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["review"]>;
export type reviewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    comment?: boolean;
    parent_id?: boolean;
    menu_id?: boolean;
    createdAt?: boolean;
    updateAt?: boolean;
    related_comment?: boolean | Prisma.review$related_commentArgs<ExtArgs>;
    menu?: boolean | Prisma.menuDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["review"]>;
export type reviewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    comment?: boolean;
    parent_id?: boolean;
    menu_id?: boolean;
    createdAt?: boolean;
    updateAt?: boolean;
    related_comment?: boolean | Prisma.review$related_commentArgs<ExtArgs>;
    menu?: boolean | Prisma.menuDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["review"]>;
export type reviewSelectScalar = {
    id?: boolean;
    comment?: boolean;
    parent_id?: boolean;
    menu_id?: boolean;
    createdAt?: boolean;
    updateAt?: boolean;
};
export type reviewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "comment" | "parent_id" | "menu_id" | "createdAt" | "updateAt", ExtArgs["result"]["review"]>;
export type reviewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    related_comment?: boolean | Prisma.review$related_commentArgs<ExtArgs>;
    replies?: boolean | Prisma.review$repliesArgs<ExtArgs>;
    menu?: boolean | Prisma.menuDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ReviewCountOutputTypeDefaultArgs<ExtArgs>;
};
export type reviewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    related_comment?: boolean | Prisma.review$related_commentArgs<ExtArgs>;
    menu?: boolean | Prisma.menuDefaultArgs<ExtArgs>;
};
export type reviewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    related_comment?: boolean | Prisma.review$related_commentArgs<ExtArgs>;
    menu?: boolean | Prisma.menuDefaultArgs<ExtArgs>;
};
export type $reviewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "review";
    objects: {
        related_comment: Prisma.$reviewPayload<ExtArgs> | null;
        replies: Prisma.$reviewPayload<ExtArgs>[];
        menu: Prisma.$menuPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        comment: string | null;
        parent_id: string | null;
        menu_id: string;
        createdAt: Date;
        updateAt: Date;
    }, ExtArgs["result"]["review"]>;
    composites: {};
};
export type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$reviewPayload, S>;
export type reviewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReviewCountAggregateInputType | true;
};
export interface reviewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['review'];
        meta: {
            name: 'review';
        };
    };
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: Prisma.SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__reviewClient<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__reviewClient<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: Prisma.SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma.Prisma__reviewClient<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__reviewClient<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     *
     */
    findMany<T extends reviewFindManyArgs>(args?: Prisma.SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     *
     */
    create<T extends reviewCreateArgs>(args: Prisma.SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma.Prisma__reviewClient<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends reviewCreateManyArgs>(args?: Prisma.SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends reviewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, reviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     *
     */
    delete<T extends reviewDeleteArgs>(args: Prisma.SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma.Prisma__reviewClient<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends reviewUpdateArgs>(args: Prisma.SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma.Prisma__reviewClient<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: Prisma.SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends reviewUpdateManyArgs>(args: Prisma.SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends reviewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, reviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: Prisma.SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma.Prisma__reviewClient<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(args?: Prisma.Subset<T, reviewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReviewCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Prisma.Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>;
    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
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
    groupBy<T extends reviewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: reviewGroupByArgs['orderBy'];
    } : {
        orderBy?: reviewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the review model
     */
    readonly fields: reviewFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for review.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__reviewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    related_comment<T extends Prisma.review$related_commentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.review$related_commentArgs<ExtArgs>>): Prisma.Prisma__reviewClient<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    replies<T extends Prisma.review$repliesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.review$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    menu<T extends Prisma.menuDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.menuDefaultArgs<ExtArgs>>): Prisma.Prisma__menuClient<runtime.Types.Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the review model
 */
export interface reviewFieldRefs {
    readonly id: Prisma.FieldRef<"review", 'String'>;
    readonly comment: Prisma.FieldRef<"review", 'String'>;
    readonly parent_id: Prisma.FieldRef<"review", 'String'>;
    readonly menu_id: Prisma.FieldRef<"review", 'String'>;
    readonly createdAt: Prisma.FieldRef<"review", 'DateTime'>;
    readonly updateAt: Prisma.FieldRef<"review", 'DateTime'>;
}
/**
 * review findUnique
 */
export type reviewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which review to fetch.
     */
    where: Prisma.reviewWhereUniqueInput;
};
/**
 * review findUniqueOrThrow
 */
export type reviewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which review to fetch.
     */
    where: Prisma.reviewWhereUniqueInput;
};
/**
 * review findFirst
 */
export type reviewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which review to fetch.
     */
    where?: Prisma.reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: Prisma.reviewOrderByWithRelationInput | Prisma.reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: Prisma.reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
/**
 * review findFirstOrThrow
 */
export type reviewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which review to fetch.
     */
    where?: Prisma.reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: Prisma.reviewOrderByWithRelationInput | Prisma.reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: Prisma.reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
/**
 * review findMany
 */
export type reviewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which reviews to fetch.
     */
    where?: Prisma.reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: Prisma.reviewOrderByWithRelationInput | Prisma.reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reviews.
     */
    cursor?: Prisma.reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
/**
 * review create
 */
export type reviewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a review.
     */
    data: Prisma.XOR<Prisma.reviewCreateInput, Prisma.reviewUncheckedCreateInput>;
};
/**
 * review createMany
 */
export type reviewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: Prisma.reviewCreateManyInput | Prisma.reviewCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * review createManyAndReturn
 */
export type reviewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: Prisma.reviewSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the review
     */
    omit?: Prisma.reviewOmit<ExtArgs> | null;
    /**
     * The data used to create many reviews.
     */
    data: Prisma.reviewCreateManyInput | Prisma.reviewCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.reviewIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * review update
 */
export type reviewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a review.
     */
    data: Prisma.XOR<Prisma.reviewUpdateInput, Prisma.reviewUncheckedUpdateInput>;
    /**
     * Choose, which review to update.
     */
    where: Prisma.reviewWhereUniqueInput;
};
/**
 * review updateMany
 */
export type reviewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: Prisma.XOR<Prisma.reviewUpdateManyMutationInput, Prisma.reviewUncheckedUpdateManyInput>;
    /**
     * Filter which reviews to update
     */
    where?: Prisma.reviewWhereInput;
    /**
     * Limit how many reviews to update.
     */
    limit?: number;
};
/**
 * review updateManyAndReturn
 */
export type reviewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: Prisma.reviewSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the review
     */
    omit?: Prisma.reviewOmit<ExtArgs> | null;
    /**
     * The data used to update reviews.
     */
    data: Prisma.XOR<Prisma.reviewUpdateManyMutationInput, Prisma.reviewUncheckedUpdateManyInput>;
    /**
     * Filter which reviews to update
     */
    where?: Prisma.reviewWhereInput;
    /**
     * Limit how many reviews to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.reviewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * review upsert
 */
export type reviewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: Prisma.reviewWhereUniqueInput;
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: Prisma.XOR<Prisma.reviewCreateInput, Prisma.reviewUncheckedCreateInput>;
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.reviewUpdateInput, Prisma.reviewUncheckedUpdateInput>;
};
/**
 * review delete
 */
export type reviewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which review to delete.
     */
    where: Prisma.reviewWhereUniqueInput;
};
/**
 * review deleteMany
 */
export type reviewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: Prisma.reviewWhereInput;
    /**
     * Limit how many reviews to delete.
     */
    limit?: number;
};
/**
 * review.related_comment
 */
export type review$related_commentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * review.replies
 */
export type review$repliesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * review without action
 */
export type reviewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=review.d.ts.map