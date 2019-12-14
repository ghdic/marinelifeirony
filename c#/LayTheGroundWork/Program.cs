using System;
/* &데이타 타입
 * bool 1bit
 * byte(unsinged) 8bit
 * sbyte 8bit
 * short 16bit
 * int 32bit
 * long 64bit
 * ushort 16bit
 * uint 32bit
 * ulong 64bit
 * float 32bit
 * double 64bit
 * decimal 128bit
 * object
 * 
 * &리터럴 데이터 타입
 * long -> L
 * uint -> U
 * ulong -> UL
 * float -> F
 * double -> D
 * deciaml -> M
 * 
 * &가변 배열
 * int[][] arr = new int[2][];
 * 
 * a[0] = new int[2];
 * a[1] = new int[10]; // 가능!
 * 
 * & string 함수들
 * 
 * 
 * & 연산자 ??
 * 
 * & enum
 * 비트 이용해 여러개 확인 가능 2의배수
*/
namespace LayTheGroundWork
{
    class Program
    {
        static void Main(string[] args)
        {
            string aaa = "123";
            
            Console.WriteLine("Hello World!" + aaa);
        }
    }
}
