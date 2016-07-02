<?php
/**
 * Created by PhpStorm.
 * User: lucif3r
 * Date: 2/10/15
 * Time: 4:08 PM
 */

require_once('/tmp/src.php');

class SrcTest extends PHPUnit_Framework_TestCase
{
    public function setUp(){ }
    public function tearDown(){ }

    public function testIsSanitized()
    {

        $connObj = new Src();
        $payload = "lol;echo 'unittest'";

        $result = $connObj->file_read($payload);
        $this->assertNotContains("unittest", $result);
    }
}
