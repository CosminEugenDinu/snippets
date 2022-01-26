#ifndef DLISTERRORS_H
#define DLISTERRORS_H

#include <string>
using namespace std;

class DListEmptyException
{
private:
  string msg;

public:
  DListEmptyException(const string &errMsg = "")
      : msg(errMsg){};
  string getMessage() { return msg; };
};

#endif