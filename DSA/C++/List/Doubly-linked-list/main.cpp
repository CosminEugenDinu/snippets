#include <iostream>
#include <string>
#include "DList.h"

using namespace std;


const int rows = 4;

string Luceafarul[rows] = {
    "a fost odata can povesti",
    "a fost ca niciodata",
    "din rude imparatesti",
    "o mult prea frumoasa fata"};

int main()
{
  DList lists[rows]; 

  // Converteste textul in lista dublu inlantuita
  for (int i = 0; i < rows; i++)
    lists[i].readWords(Luceafarul[i]);

  cout<< endl << "Printeaza lista: \"cout << list;\":" << endl; 
  cout << lists[0] << endl;

  cout << endl << "Printeaza reprezentarea string:" << endl;
  for (int i = 0; i < rows; i++)
    cout << lists[i].str() << endl;
  
  cout<< endl<< "Schimba cu majuscula inceputul fiecarui rand:" << endl;
  for (int i = 0; i < rows; i++)
  {
    string firstWord = lists[i].getFirst()->getValue();
    firstWord.replace(0, 1, string(1, toupper(firstWord[0])));
    lists[i].getFirst()->change(firstWord);  
    cout << lists[i].str() << endl;
  }

  cout<<endl<< "Adauga numere la inc fiecarui rand si virgula la sfarsit:" << endl;
  for (int i = 0; i < rows; i++)
  {
    string lineNo = string(1, i + 49); // 49 = ASCII = "1"
    lists[i].addFirst(lineNo + ".");

    string lastWord = lists[i].getLast()->getValue();
    lists[i].getLast()->change(lastWord + ",");
    cout << lists[i].str() << endl;
  }

  cout << endl << "Editeaza \"can\" -> \"ca-n\":" << endl;
  DNode* typo = lists[0].search("can");
  typo->change("ca-n");
  cout << lists[0].str() << endl;

  cout << endl << "Adauga \"mari\" dupa \"rude\":" << endl;
  DNode* rude = lists[2].search("rude");
  lists[2].addAfter(rude, "mari");
  cout << lists[2].str() << endl;

  cout << endl << "Sterge \"mult\" din ultimul rand:" << endl;
  DNode* mult = lists[3].search("mult");
  lists[3].remove(mult);
  cout << lists[3].str() << endl;

  cout << endl << "Salveaza prima lista (rand 1) in fisierul \"list.txt\":" <<endl;
  lists[0].saveFile("list.txt");

  cout << endl << "Citeste \"list.txt\" intr-o noua lista:" << endl;
  DList newList;
  newList.readFile("list.txt");
  cout << newList << endl;

  return 0;
}