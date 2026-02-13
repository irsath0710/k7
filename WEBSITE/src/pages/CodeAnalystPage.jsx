import React, { useState } from 'react';

const CodeAnalystPage = ({ teamData, setCurrentView }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const questions = {
        c: [
            {
                id: 1, content: `Buggy Code:
#include<stdio.h>

long long reverse(long long n){
    long long r=0;
    while(n>=0){          
        r=r*10+n%10;
        n/=10;
    }
    return r;
}

int main(){
    long long n; int k;
    scanf("%d %lld",&k,&n);  

    for(int i=1;i<=k;i++){
        long long rev=reverse(n);
        n=rev-n;                

        if(n=reverse(n)) break; 
    }

    printf("%lld",n);
}` },
            {
                id: 2, content: `Buggy Code:
#include <stdio.h>
#include <string.h>

long long countSubstrings(char *s, char c) {
    long long k = 0;

    for(int i = 0; s[i] != '\\0'; i++) {
        if(s[i] == c)
            k++;
    }

    return k * (k - 1) / 2;
}

int main() {
    char s[100001];
    char c;

    printf("Enter string: ");
    scanf("%s", s);

    printf("Enter character: ");
    scanf(" %c", &c);

    printf("Output: %lld", countSubstrings(s, c));

    return 0;
}` },
            {
                id: 3, content: `Buggy Code:
#include <stdio.h>
#include <string.h>

void replaceDigits(char *s) {
    int n = strlen(s);

    for (int i = 1; i < n; i += 2) {
        
        s[i] = s[i - 1] + s[i];
    }
}

int main() {
    char s[100001];

    scanf("%s", s);

    replaceDigits(s);

    printf("%s", s);

    return 0;
}` },
            {
                id: 4, content: `Buggy Code:
#include <stdio.h>
void generateMatrix(int n) {
    int matrix[20][20];
    int top = 0, bottom = n - 1;
    int left = 0, right = n - 1;
    int num = 1;
    while (top <= bottom && left <= right) {
        for (int i = left; i <= right; i++)
            matrix[top][i] = num++;
        top++;
        for (int i = top; i <= bottom; i++)
            matrix[i][right] = num++;
        right--;

        for (int i = right; i >= left; i--)
            matrix[bottom][i] = num++;
        bottom--;   
        for (int i = bottom; i >= top; i--)
            matrix[i][left] = num++;
        left--;
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            printf("%d ", matrix[i][j]);
        printf("\\n");
    }
}
int main() {
    int n;
    scanf("%d", &n);
    generateMatrix(n);
    return 0;
}` },
            {
                id: 5,  content: `Buggy Code:
#include <stdio.h>
#include <string.h>

void decryptRailFence(char cipher[], int key) {
    int len = strlen(cipher);
    char rail[20][1000];
    int i, j;

    for (i = 0; i < key; i++)
        for (j = 0; j < len; j++)
            rail[i][j] = '\\n';

    int row = 0, col = 0;
    int dir_down = 0;
    for (i = 0; i < len; i++) {
        if (row == 0)
            dir_down = 1;

        rail[row][col++] = '*';
        row += dir_down ? 1 : -1;
    }

    int index = 0;
    for (i = 0; i < key; i++)
        for (j = 0; j < len; j++)
            if (rail[i][j] == '*' && index < len)
                rail[i][j] = cipher[index++];

    char result[1000];
    row = 0; col = 0;
    dir_down = 0;

    for (i = 0; i < len; i++) {
        if (row == 0)
            dir_down = 1;

        result[i] = rail[row][col++];
        row += dir_down ? 1 : -1;
    }

    result[len] = '\\0';
    printf("Decrypted: %s", result);
}

int main() {
    char cipher[1000];
    int key;

    printf("Enter cipher text: ");
    fgets(cipher, sizeof(cipher), stdin);
    cipher[strcspn(cipher, "\\n")] = 0;

    printf("Enter key: ");
    scanf("%d", &key);

    decryptRailFence(cipher, key);

    return 0;
}` }
        ],
        cpp: [
            {
                id: 1, content: `Buggy Code:
#include<iostream>
using namespace std;

long long rev(long long n){
    long long r=0;
    while(n){
        r=r*10+n%10;
        n/=10;
    }
    return r;
}

int main(){
    long long n; int k;
    cin>>n>>k;

    for(int i=0;i<=k;i++){      
        long long r=rev(n);
        n=r-n;                     

        if(n==r); break;           
    }

    cout<<n;
}` },
            {
                id: 2, content: `Buggy Code:
#include <iostream>
using namespace std;

long long countSubstrings(string s, char c) {
    long long count = 0;
    int n = s.length();

    for(int i = 0; i < n; i++) {
        for(int j = i; j < n; j++) {
            if(s[i] == c && s[j] == c)
                count++;
        }
    }

    return count;
}

int main() {
    string s;
    char c;

    cout << "Enter string: ";
    cin >> s;

    cout << "Enter character: ";
    cin >> c;

    cout << "Output: " << countSubstrings(s, c) << endl;

    return 0;
}` },
            {
                id: 3, content: `Buggy Code:
#include <iostream>
using namespace std;

string replaceDigits(string s) {
    for (int i = 1; i < s.length(); i += 2) {
        int shift = s[i];           
        s[i] = s[i - 1] + shift;
    }
    return s;
}

int main() {
    string s;
    cin >> s;

    cout << replaceDigits(s) << endl;

    return 0;
}` },
            {
                id: 4, content: `Buggy Code:
#include <iostream>
using namespace std;

void generateMatrix(int n) {
    int matrix[20][20];

    int top = 0, bottom = n - 1;
    int left = 0, right = n - 1;
    int num = 1;

    while (top < bottom && left < right) {

        for (int i = left; i <= right; i++)
            matrix[top][i] = num++;
        top++;

        for (int i = top; i <= bottom; i++)
            matrix[i][right] = num++;
        right--;

        for (int i = right; i >= left; i--)
            matrix[bottom][i] = num++;
        bottom--;

        for (int i = bottom; i >= top; i--)
            matrix[i][left] = num++;
        
        left--;   
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            cout << matrix[i][j] << " ";
        cout << endl;
    }
}

int main() {
    int n;
    cin >> n;

    generateMatrix(n);

    return 0;
}` },
            {
                id: 5,  content: `Buggy Code:
#include <iostream>
using namespace std;

void decryptRailFence(string cipher, int key) {
    int len = cipher.length();
    char rail[20][1000];

    for (int i = 0; i < key; i++)
        for (int j = 0; j < len; j++)
            rail[i][j] = '\\n';

    int row = 0, col = 0;
    bool dir_down = false;

    for (int i = 0; i < len; i++) {
        if (row == 0)
            dir_down = true;

        rail[row][col++] = '*';
        row += dir_down ? 1 : -1;
    }

    int index = 0;
    for (int i = 0; i < key; i++)
        for (int j = 0; j < len; j++)
            if (rail[i][j] == '*' && index < len)
                rail[i][j] = cipher[index++];

    string result;
    row = 0; col = 0;
    dir_down = false;

    for (int i = 0; i < len; i++) {
        if (row == 0)
            dir_down = true;

        result += rail[row][col++];
        row += dir_down ? 1 : -1;
    }

    cout << "Decrypted: " << result << endl;
}

int main() {
    string cipher;
    int key;

    cout << "Enter cipher text: ";
    getline(cin, cipher);

    cout << "Enter key: ";
    cin >> key;

    decryptRailFence(cipher, key);

    return 0;
}` }
        ],
        python: [
            {
                id: 1, content: `Buggy Code:
def rev(n):
    return int(str(n).reverse())  

n,k=map(int,input().split())

for i in range(k+1):            
    r=rev(n)
    n=r-n                         

    if n=str(n)[::-1]:            
        break

print(n)` },
            {
                id: 2, content: `Buggy Code:
def countSubstrings(s, c):
    k = s.count(c)
    return k * (k - 1) 


def main():
    s = input("Enter string: ")
    c = input("Enter character: ")

    print("Output:", countSubstrings(s, c))


if __name__ == "__main__":
    main()` },
            {
                id: 3, content: `Buggy Code:
def replaceDigits(s):
    s = list(s)

    for i in range(1, len(s), 2):
        
        s[i] = chr(ord(s[i - 1]) + s[i])

    return "".join(s)


def main():
    s = input()
    print(replaceDigits(s))


if __name__ == "__main__":
    main()` },
            {
                id: 4, content: `Buggy Code:
def generateMatrix(n):
    matrix = [[0]*n for _ in range(n)]
    top, bottom = 0, n-1
    left, right = 0, n-1
    num = 1

    while top < bottom and left < right:  

        for i in range(left, right+1):
            matrix[top][i] = num
            num += 1
        top += 1

        for i in range(top, bottom+1):
            matrix[i][right] = num
            num += 1
        right -= 1

        for i in range(right, left-1, -1):
            matrix[bottom][i] = num
            num += 1
        bottom -= 1

        for i in range(bottom, top-1, -1):
            matrix[i][left] = num
            num += 1
        left -= 1   

    return matrix

def main():
    n = int(input())
    result = generateMatrix(n)

    for row in result:
        print(*row)


if __name__ == "__main__":
    main()` },
            {
                id: 5, content: `Buggy Code:
def decryptRailFence(cipher, key):
    rail = [['\\n' for _ in range(len(cipher))] for _ in range(key)]

    row = 0
    col = 0
    dir_down = False

    for i in range(len(cipher)):
        if row == 0:
            dir_down = True

        rail[row][col] = '*'
        col += 1
        row += 1 if dir_down else -1  
    index = 0
    for i in range(key):
        for j in range(len(cipher)):
            if rail[i][j] == '*' and index < len(cipher):
                rail[i][j] = cipher[index]
                index += 1

    result = ""
    row = 0
    col = 0
    dir_down = False

    for i in range(len(cipher)):
        if row == 0:
            dir_down = True

        result += rail[row][col]
        col += 1
        row += 1 if dir_down else -1

    print("Decrypted:", result)


def main():
    cipher = input("Enter cipher text: ")
    key = int(input("Enter key: "))
    decryptRailFence(cipher, key)


if __name__ == "__main__":
    main()` }
        ],
        java: [
            {
                id: 1, content: `Buggy Code:
import java.util.Scanner;

public class Main {

    static long reverse(long n) {
        long r = 0;

        while (n >= 0) {        
            r = r * 10 + n % 10;
            n /= 10;
        }

        return r;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        long n = sc.nextLong();
        int k = sc.nextInt();

        for (int i = 0; i <= k; i++) {   

            long r = reverse(n);
            n = r - n;                  

            if (n = reverse(n))         
                break;
        }

        System.out.println(n);
    }
}` },
            {
                id: 2, content: `Buggy Code:
import java.util.Scanner;

public class Main {

    public static long countSubstrings(String s, char c) {
        long k = 0;

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == c)
                k++;
        }
        return k * (k - 1) / 2;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter string: ");
        String s = sc.next();

        System.out.print("Enter character: ");
        char c = sc.next().charAt(0);

        System.out.println("Output: " + countSubstrings(s, c));
    }
}` },
            {
                id: 3,  content: `Buggy Code:
import java.util.Scanner;

public class Main {

    public static String replaceDigits(String s) {
        char[] arr = s.toCharArray();

        for (int i = 1; i < arr.length; i += 2) {
            
            arr[i] = (char)(arr[i - 1] + arr[i]);
        }

        return new String(arr);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();

        System.out.println(replaceDigits(s));
    }
}` },
            {
                id: 4,  content: `Buggy Code:
import java.util.Scanner;
public class Main {
    public static int[][] generateMatrix(int n) {
        int[][] matrix = new int[n][n];
        int top = 0, bottom = n - 1;
        int left = 0, right = n - 1;
        int num = 1;

        while (top <= bottom && left <= right) {

            for (int i = left; i <= right; i++)
                matrix[top][i] = num++;
            top++;

            for (int i = top; i <= bottom; i++)
                matrix[i][right] = num++;
            right--;

            for (int i = right; i >= left; i--)
                matrix[bottom][i] = num++;
            
            for (int i = bottom; i >= top; i--)
                matrix[i][left] = num++;
            left++;
        }

        return matrix;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int[][] result = generateMatrix(n);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++)
                System.out.print(result[i][j] + " ");
            System.out.println();
        }
    }
}` },
            {
                id: 5, content: `Buggy Code:
import java.util.Scanner;

public class Main {

    public static void decryptRailFence(String cipher, int key) {
        int len = cipher.length();
        char[][] rail = new char[key][len];

        for (int i = 0; i < key; i++)
            for (int j = 0; j < len; j++)
                rail[i][j] = '\\n';

        int row = 0, col = 0;
        boolean dirDown = false;

        for (int i = 0; i < len; i++) {
            if (row == 0)
                dirDown = true;

            rail[row][col++] = '*';
            row += dirDown ? 1 : -1;  
        }

        int index = 0;
        for (int i = 0; i < key; i++)
            for (int j = 0; j < len; j++)
                if (rail[i][j] == '*' && index < len)
                    rail[i][j] = cipher.charAt(index++);

        StringBuilder result = new StringBuilder();
        row = 0; col = 0;
        dirDown = false;

        for (int i = 0; i < len; i++) {
            if (row == 0)
                dirDown = true;

            result.append(rail[row][col++]);
            row += dirDown ? 1 : -1;
        }

        System.out.println("Decrypted: " + result.toString());
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter cipher text: ");
        String cipher = sc.nextLine();

        System.out.print("Enter key: ");
        int key = sc.nextInt();

        decryptRailFence(cipher, key);
    }
}` }
        ]
    };

    return (
        <div className="analyst-view squid-container" style={{ minHeight: '100vh', padding: '2rem', color: '#fff' }}>
            <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <h2 className="green-text" style={{ fontSize: '2rem', margin: 0 }}>CODE ANALYST INTERFACE</h2>
                <div style={{ textAlign: 'right' }}>
                    <p style={{ margin: 0, color: '#888' }}>OPERATIVE: {teamData?.teamName}</p>
                </div>
            </div>

            {!selectedLanguage ? (
                <div className="language-select" style={{ textAlign: 'center', marginTop: '5rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '3rem', fontWeight: 900 }}>SELECT LANGUAGE PROTOCOL</h1>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                        {['c', 'cpp', 'python', 'java'].map(lang => (
                            <button
                                key={lang}
                                onClick={() => setSelectedLanguage(lang)}
                                className="lang-btn"
                                style={{
                                    background: '#111',
                                    border: '2px solid #333',
                                    padding: '3rem',
                                    width: '250px',
                                    fontSize: '2rem',
                                    fontWeight: 900,
                                    color: '#fff',
                                    cursor: 'pointer',
                                    borderRadius: '12px',
                                    textTransform: 'uppercase',
                                    transition: 'all 0.3s'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.borderColor = '#00ff66'; e.currentTarget.style.color = '#00ff66'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1)'; }}
                            >
                                {lang === 'cpp' ? 'C++' : lang}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="questions-view">
                    <button
                        onClick={() => setSelectedLanguage(null)}
                        style={{ background: 'transparent', border: 'none', color: '#888', cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center' }}
                    >
                        ← BACK TO LANGUAGE SELECT
                    </button>

                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
                        ANALYSIS TASKS: <span style={{ color: 'var(--squid-pink)' }}>{selectedLanguage.toUpperCase()}</span>
                    </h2>

                    <div className="questions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                        {questions[selectedLanguage].map((q) => (
                            <div key={q.id} className="question-card" style={{ background: '#111', border: '1px solid #333', padding: '2rem', borderRadius: '8px' }}>
                                <h3 style={{ color: '#00ff66', marginBottom: '1rem' }}>TASK_0{q.id}: {q.title}</h3>
                                <pre style={{ background: '#000', padding: '1rem', borderRadius: '4px', whiteSpace: 'pre-wrap', fontFamily: 'monospace', color: '#ddd' }}>
                                    {q.content}
                                </pre>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CodeAnalystPage;
