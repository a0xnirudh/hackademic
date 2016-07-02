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
        try {
            $payload = "../lfi/unittest";
            $result = $connObj->file_read($payload);
        } catch (Exception $e) {
            echo $e . "Correct. Good Job !";
            exit();
        }

    $this->assertNotContains("unittest", $result);

    }
}
