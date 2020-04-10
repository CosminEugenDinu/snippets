def Messages(comment=''):
        """
        Returns tuple of 2 closures.

        Ussage example:

        add_info_msg, get_info_msgs = Messages('Info')
        add_success_msg, get_success_msgs = Messages('Success')
        add_failure_msg, get_failures_msgs = Messages('Fail')

        for i in range(10):
            add_success_msg('line matched')
        
        add_success_msg('Method succeeded')

        str_for_print = '\n'.join(f'{value} {msg}' 
            for msg, value in get_success_msgs().items())

        print(str_for_print)
        """

        _who_called_me = sys._getframe(1).f_code.co_name
        _msgs_count = {_who_called_me: comment}
        
        def add_msg(msg):
            nonlocal _msgs_count

            if type(msg) is not str:
                raise Exception('msg must be of type str')

            if _msgs_count.get(msg) is not None:
                _msgs_count[msg] += 1
            else:
                _msgs_count[msg] = 1

            return True
        
        def get_msgs():
            nonlocal _msgs_count
            return _msgs_count

        return add_msg, get_msgs