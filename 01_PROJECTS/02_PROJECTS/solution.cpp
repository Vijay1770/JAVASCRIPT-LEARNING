#include <bits/stdc++.h>
using namespace std;

int smallest_no(int arr[], int n)
{
    if (n == 1)
    {
        return arr[0];
    }
    else
    {
        return min(arr[n - 1], smallest_no(arr, n - 1));
    }
}

int solution(int arr[], int q, int n)
{
    int ans ,cnt=0;
    for (int i = 1; i <= 61; i++)
    {
        ans=i;
       for(int j=1;j<n;j++)
       {
        if(i%arr[j]==q)
        {
            cnt++;
        }
       }
    }
    if(cnt==n-1)
    {
        return ans;
    }
}
int main()
{
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    sort(arr, arr + n);
    int q = arr[0];
    cout << "minimum-->" << q << endl;
    cout << solution(arr, q, n);
    return 0;
}