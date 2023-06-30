#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> findTriplets(vector<int> arr, int n, int K) {
    sort(arr.begin(), arr.end()); 

    vector<vector<int>> triplets; 

    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && arr[i] == arr[i - 1])
            continue;
        int left = i + 1;
        int right = n - 1;
        while (left < right) {
            int current_sum = arr[i] + arr[left] + arr[right];
            if (current_sum == K) {
                triplets.push_back({arr[i], arr[left], arr[right]});
                while (left < right && arr[left] == arr[left + 1])
                    left++;
                while (left < right && arr[right] == arr[right - 1])
                    right--;

                left++;
                right--;
            } else if (current_sum < K) {
                left++;
            } else {
                right--;
            }
        }
    }
	if(triplets.size()==0)
	{
		return -1;
	}
    return triplets;
}
int main() {
    int t;
	cin>>t;
	while(t--)
	{
		int n;
		cin>>n;
		vector<int>num;
		for(int i=0;i<n;i++)
		{
			int x;
			cin>>x;
			num.push_back(x);
		}
		int k;
		cin>>k;
		vector<vector<int>> result = findTriplets(arr, n, K);

    	for (const auto& triplet : result) {
        	for (int num : triplet) {
            	cout << num << " ";
        	}
        	cout << endl;
    	}
	}    

    return 0;
}
