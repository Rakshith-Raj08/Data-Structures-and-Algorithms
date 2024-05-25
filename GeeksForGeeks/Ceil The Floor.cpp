pair<int, int> getFloorAndCeil(int arr[], int n, int x) {
    sort(arr, arr + n);

    // Initialize floor and ceil
    int floor = INT_MIN;
    int ceil = INT_MAX;

    // Find lower bound and upper bound
    int* lb = lower_bound(arr, arr + n, x);
    int* ub = upper_bound(arr, arr + n, x);

    // Determine floor
    if (lb != arr) {
        // If lower bound is not the first element, floor exists
        floor = *(lb - 1);
    } else if (lb == arr && *lb <= x) {
        // Special case where the first element is the floor
        floor = *lb;
    } else {
        // If no floor exists
        floor = -1;
    }

    // Determine ceil
    if (lb != arr + n && *lb == x) {
        // If exact element is found, it's both floor and ceil
        ceil = *lb;
    } else if (ub != arr + n) {
        // If upper bound is within the array, ceil exists
        ceil = *ub;
    } else {
        // If no ceil exists
        ceil = -1;
    }

    return {floor, ceil};
}