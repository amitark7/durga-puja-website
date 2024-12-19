import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const getMemberList = createAsyncThunk(
  "getMemberList",
  async (_, { rejectWithValue }) => {
    try {
      const membersQuery = query(
        collection(db, "members"),
        orderBy("createdAt", "desc")
      );
      const data = await getDocs(membersQuery);
      let members = [];
      data.forEach((doc) => {
        members = [...members, { ...doc.data(), id: doc.id }];
      });
      return members;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getImageList = createAsyncThunk(
  "getImageList",
  async (_, { rejectWithValue }) => {
    try {
      const galleryQuery = query(
        collection(db, "gallery"),
        orderBy("uploadedAt", "desc")
      );
      const data = await getDocs(galleryQuery);
      let gallery = [];
      data.forEach((doc) => {
        gallery = [...gallery, { ...doc.data(), id: doc.id }];
      });
      return gallery;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getExpenseList = createAsyncThunk(
  "getExpenseList",
  async (_, { rejectWithValue }) => {
    try {
      const expenseQuery = query(
        collection(db, "expenses"),
        orderBy("createdAt", "desc")
      );
      const data = await getDocs(expenseQuery);
      let expenses = [];
      data.forEach((doc) => {
        expenses = [...expenses, { ...doc.data(), id: doc.id }];
      });
      return expenses;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFundList = createAsyncThunk(
  "getFundList",
  async (_, { rejectWithValue }) => {
    try {
      const fundQuery = query(
        collection(db, "funds"),
        orderBy("createdAt", "desc")
      );
      const data = await getDocs(fundQuery);
      let funds = [];
      data.forEach((doc) => {
        funds = [...funds, { ...doc.data(), id: doc.id }];
      });

      return funds;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getEvents = createAsyncThunk("getEvents", async () => {
  try {
    const eventsQuery = query(
      collection(db, "events"),
      orderBy("createdAt", "desc")
    );
    const data = await getDocs(eventsQuery);
    let events = [];
    data.forEach((doc) => {
      events = [...events, { ...doc.data(), id: doc.id }];
    });

    return events;
  } catch (error) {
    console.log(error);
  }
});

const reducerSlice = createSlice({
  name: "list",
  initialState: {
    eventList: [],
    fundList: [],
    expenseList: [],
    galleryList: [],
    memberList: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFundList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFundList.fulfilled, (state, action) => {
        state.fundList = action.payload;
        state.loading = false;
      })
      .addCase(getFundList.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.eventList = action.payload;
        state.loading = false;
      })
      .addCase(getEvents.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getExpenseList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExpenseList.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseList = action.payload;
      })
      .addCase(getExpenseList.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getImageList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getImageList.fulfilled, (state, action) => {
        state.loading = false;
        state.galleryList = action.payload;
      })
      .addCase(getImageList.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getMemberList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMemberList.fulfilled, (state, action) => {
        state.loading = false;
        state.memberList = action.payload;
      })
      .addCase(getMemberList.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default reducerSlice;
