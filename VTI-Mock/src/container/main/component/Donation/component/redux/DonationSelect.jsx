const selectDonation = (state) => state.donate.donation;
const selectDonationPrice = (state) => state.donate.price;
const selectDonationCount = (state) => state.donate.count;
export {selectDonation,selectDonationCount,selectDonationPrice};